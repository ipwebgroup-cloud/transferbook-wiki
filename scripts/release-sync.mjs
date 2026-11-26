import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('../', import.meta.url));
const repo = 'ipwebgroup-cloud/transferbook-plus-ai-studio';
const ledgerPath = 'release-sync/baseline.json';
const locales = ['', 'el/'];
const versionPattern = /^v(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)$/;
const shaPattern = /^[a-f0-9]{40}$/;
const read = (p) => fs.readFileSync(path.join(root,p),'utf8');
const parse = (p) => JSON.parse(read(p));
export function compareVersions(a,b) {
  assert(versionPattern.test(a) && versionPattern.test(b), 'Invalid version');
  const x=a.slice(1).split('.').map(BigInt), y=b.slice(1).split('.').map(BigInt);
  for(let i=0;i<3;i++) if(x[i]!==y[i]) return x[i]>y[i]?1:-1;
  return 0;
}
export function headings(md) {
  const result=[...md.matchAll(/^## (v\d+\.\d+\.\d+)(?=\s|$)/gm)].map(m=>m[1]);
  assert(result.length>0 && new Set(result).size===result.length, 'Missing or duplicate version headings');
  assert(result.every(v=>versionPattern.test(v)), 'Invalid heading version');
  assert(result.every((v,i)=>!i||compareVersions(result[i-1],v)>0), 'Versions must descend');
  return result;
}
export function validateDocs(ledger,docs) {
  assert.equal(ledger.repository,repo);
  const versions=Object.keys(ledger.tags).sort((a,b)=>compareVersions(b,a));
  assert(versions.length>0 && versions.every(v=>shaPattern.test(ledger.tags[v])), 'Invalid tag inventory');
  const latest=versions[0];
  for(const locale of locales) {
    const ch=docs[locale+'changelog'], notes=docs[locale+'release-notes'];
    assert.deepEqual(headings(ch),versions,'Changelog inventory mismatch: '+locale);
    const nv=headings(notes);
    assert.equal(nv[0],latest,'Release Notes latest mismatch: '+locale);
    assert(nv.every(v=>versions.includes(v)), 'Unknown Release Notes version');
    assert(ch.includes('**Snapshot: '+latest) || ch.includes('**Στιγμιότυπο: '+latest),'Snapshot mismatch');
  }
  assert.deepEqual(headings(docs['release-notes']),headings(docs['el/release-notes']), 'Release Notes locale mismatch');
  return latest;
}
function local() {
  return {ledger:parse(ledgerPath),docs:Object.fromEntries(locales.flatMap(l=>['changelog','release-notes'].map(p=>[l+p,read('docs/'+l+p+'/index.md')])) )};
}
function api(endpoint, paginated=false) {
  const args=['api','--hostname','github.com'];
  if(paginated) args.push('--paginate','--slurp');
  args.push('repos/'+repo+'/'+endpoint);
  const out=execFileSync('gh',args,{encoding:'utf8',maxBuffer:16*1024*1024,timeout:90000,windowsHide:true,stdio:['ignore','pipe','pipe']});
  const data=JSON.parse(out);
  if(paginated) {assert(Array.isArray(data)&&data.every(Array.isArray),'Unexpected API pages');return data.flat();}
  return data;
}
export function findPending(ledger, refs, releases) {
  const remote=new Map();
  for(const r of refs) {
    if(!r.ref?.startsWith('refs/tags/')) continue;
    const v=r.ref.slice(10);
    if(!versionPattern.test(v)) continue;
    assert(!remote.has(v),'Duplicate tag: '+v);
    assert(shaPattern.test(r.object?.sha),'Invalid remote tag SHA: '+v);
    remote.set(v,r.object);
  }
  for(const [v,sha] of Object.entries(ledger.tags)) {
    assert.equal(remote.get(v)?.sha,sha,'Historical tag missing or changed: '+v);
  }
  const latest=Object.keys(ledger.tags).sort((a,b)=>compareVersions(b,a))[0];
  const pending=[...remote.keys()].filter(v=>!(v in ledger.tags)).sort(compareVersions);
  assert(pending.every(v=>compareVersions(v,latest)>0),'Unexpected historical tag; manual reconciliation required');
  return pending.map(version=>{
    const tag=remote.get(version);
    assert.equal(tag.type,'tag','New release must have annotated tag: '+version);
    const found=releases.filter(r=>r.tag_name===version && !r.draft && !r.prerelease && r.published_at);
    assert(found.length<=1,'Duplicate published release: '+version);
    const release=found[0];
    return {version,tagSha:tag.sha,published:!!release,date:release?.published_at?.slice(0,10)??null};
  });
}
function discover(ledger) {
  const refs=api('git/matching-refs/tags/');
  const releases=api('releases?per_page=100',true);
  return findPending(ledger,refs,releases).map(p=>{
    const tag=api('git/tags/'+p.tagSha);
    assert.equal(tag.tag,p.version,'Tag identity mismatch');
    assert.equal(tag.verification?.verified,true,'Unverified tag: '+p.version);
    assert.equal(tag.object?.type,'commit','Tag does not point to commit');
    assert(shaPattern.test(tag.object.sha),'Invalid tagged commit');
    return {...p,commit:tag.object.sha,verified:true};
  });
}
const labels={Added:'Προσθήκες',Changed:'Αλλαγές',Improved:'Βελτιώσεις',Fixed:'Διορθώσεις',Security:'Ασφάλεια',Deprecated:'Καταργήσεις σε εξέλιξη',Removed:'Αφαιρέσεις',Database:'Βάση δεδομένων',Validation:'Επαλήθευση',Availability:'Διαθεσιμότητα','Known limitations':'Γνωστοί περιορισμοί'};
function plain(s) {
  assert(typeof s==='string' && s.trim()===s && s.length>0 && s.length<=4000 && !/[\r\n<>{}\x00-\x1f]/.test(s),'Review text must be a nonempty single safe line');
  return s;
}
export function prepare(ledger,docs,pending,review) {
  validateDocs(ledger,docs);
  assert(pending.length>0,'No new versions');
  assert.deepEqual(review.map(x=>x.version),pending.map(x=>x.version),'Review must cover every pending version in ascending order');
  const next=structuredClone(ledger), out={...docs};
  for(let i=0;i<pending.length;i++){
    const p=pending[i], r=review[i];
    assert(p.verified && p.published && /^\d{4}-\d{2}-\d{2}$/.test(p.date??''),'Published verified release required: '+p.version);
    assert.equal(r.tagSha,p.tagSha,'Reviewed tag differs');
    assert.equal(r.commit,p.commit,'Reviewed commit differs');
    assert.equal(r.date,p.date,'Reviewed date differs');
    assert(Array.isArray(r.categories)&&r.categories.length>0,'Missing categories');
    assert(new Set(r.categories.map(c=>c.kind)).size===r.categories.length,'Duplicate categories');
    assert(r.categories.some(c=>c.kind==='Availability'),'Explicit availability required');
    for(const c of r.categories){assert(Object.hasOwn(labels,c.kind),'Unknown category');plain(c.en);plain(c.el);}
    plain(r.summary.en);plain(r.summary.el);
    for(const locale of locales){
      const greek=!!locale, lang=greek?'el':'en';
      const h='## '+p.version+' — '+p.date+'\n\n';
      const ch=h+(greek?'**Πηγή:** δημοσιευμένη καταγραφή έκδοσης GitHub.':'**Source:** published GitHub release record.')+'\n\n'+r.categories.map(c=>'- **'+(greek?labels[c.kind]:c.kind)+':** '+c[lang]).join('\n')+'\n\n';
      const notes=h+r.summary[lang]+'\n\n'+(greek?'**Διαθεσιμότητα:** η δημοσίευση δεν επιβεβαιώνει εγκατάσταση ή εμπορική ενεργοποίηση.':'**Availability:** publication does not confirm installation or commercial activation.')+'\n\n';
      for(const [kind,entry] of [['changelog',ch],['release-notes',notes]]){
        const key=locale+kind;
        const index=out[key].search(/^## v\d+\.\d+\.\d+/m);
        assert(index>=0,'Missing version section');
        out[key]=out[key].slice(0,index)+entry+out[key].slice(index);
      }
      const key=locale+'changelog';
      const label=greek?'Στιγμιότυπο':'Snapshot';
      const pattern=new RegExp('^\\*\\*'+label+': v\\d+\\.\\d+\\.\\d+[^\\n]*\\*\\*$','m');
      assert(pattern.test(out[key]),'Missing snapshot');
      out[key]=out[key].replace(pattern,'**'+label+': '+p.version+' · '+p.date+' (UTC).**');
    }
    next.tags[p.version]=p.tagSha;
  }
  validateDocs(next,out);
  return {ledger:next,docs:out};
}
function main() {
  const [mode='check',reviewPath]=process.argv.slice(2);
  assert(['validate','check','apply'].includes(mode),'Use validate, check or apply <review.json>');
  const {ledger,docs}=local();
  const latest=validateDocs(ledger,docs);
  console.log('[PASS] Bilingual history: '+Object.keys(ledger.tags).length+' versions; latest '+latest);
  if(mode==='validate')return;
  const pending=discover(ledger);
  if(!pending.length){console.log('[PASS] Canonical release inventory synchronized');return;}
  // Only metadata is printed. Private release text is never copied into public docs.
  console.log(JSON.stringify({pending},null,2));
  if(mode==='check'){console.log('[REVIEW REQUIRED] '+pending.length+' new version(s)');process.exitCode=2;return;}
  assert(reviewPath,'Supply a reviewed bilingual JSON file');
  const status=execFileSync('git',['status','--porcelain','--untracked-files=no'],{cwd:root,encoding:'utf8'});
  assert(!status.trim(),'Tracked worktree must be clean');
  const result=prepare(ledger,docs,pending,JSON.parse(fs.readFileSync(reviewPath,'utf8')));
  const changes={[ledgerPath]:JSON.stringify(result.ledger,null,2)+'\n'};
  for(const [key,value] of Object.entries(result.docs))changes['docs/'+key+'/index.md']=value;
  const backups=Object.fromEntries(Object.keys(changes).map(p=>[p,read(p)]));
  try {for(const [p,value] of Object.entries(changes))fs.writeFileSync(path.join(root,p),value,'utf8');}
  catch(e){for(const [p,value] of Object.entries(backups))fs.writeFileSync(path.join(root,p),value,'utf8');throw e;}
  console.log('[PASS] Reviewed local changes prepared; inspect git diff, validate and build. No commit, push or deployment performed.');
}
if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  try{main();}catch(e){console.error('[STOP] '+(e.code==='ENOENT'?'Required file or gh executable missing':e.message.split('\n')[0]));process.exitCode=1;}
}
