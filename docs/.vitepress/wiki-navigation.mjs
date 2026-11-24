// Stable navigation adapter. Change the JSON catalogue, not this file.
export function reconcile(original, catalogue) {
  if (!original || typeof original !== 'object') throw new Error('Expected static VitePress configuration')
  const seen = new Set()
  const routes = new Set(catalogue.routes)
  function normalize(link) {
    if (typeof link !== 'string' || !link.startsWith('/') || link.startsWith('//')) return link
    const m = /^([^?#]+)(.*)$/.exec(link)
    if (!m) return link
    const p = m[1], suffix = m[2]
    if (routes.has(p)) return p + suffix
    if (routes.has(p + '.html')) return p + '.html' + suffix
    if (p.endsWith('.md') && routes.has(p.slice(0,-3)+'.html')) return p.slice(0,-3)+'.html'+suffix
    if (routes.has(p.replace(/\/$/,'')+'/')) return p.replace(/\/$/,'')+'/' + suffix
    return link
  }
  function walk(value, inSidebar=false) {
    if (Array.isArray(value)) return value.map(v=>walk(v,inSidebar))
    if (!value || typeof value !== 'object') return value
    // Only traverse plain objects so functions, regexes and plugin instances survive.
    if (Object.getPrototypeOf(value)!==Object.prototype && Object.getPrototypeOf(value)!==null) return value
    const out = Object.fromEntries(Object.entries(value).map(([k,v])=>[k,walk(v,inSidebar || k==='sidebar')]))
    if (typeof out.link==='string') out.link=normalize(out.link)
    if (inSidebar && typeof out.link==='string') {
      const match=/^\/(el\/)?(integrations|developers|tutorials|help)\/$/.exec(out.link)
      if (match && catalogue.sections[match[2]]) {
        const lang=match[1]?'el':'en', prefix=match[1]?'/el/':'/'
        seen.add(lang+':'+match[2])
        const desired=catalogue.sections[match[2]].map(a=>({text:a[lang],link:prefix+match[2]+'/'+a.slug+'.html'}))
        const links=new Set(desired.map(a=>a.link))
        function retain(items) {
          return (Array.isArray(items)?items:[]).flatMap(i=>{
            if (links.has(i.link)) return []
            if (Array.isArray(i.items)) {
              const children=retain(i.items)
              return children.length || i.link ? [{...i,items:children}] : []
            }
            return [i]
          })
        }
        out.items=[...desired,...retain(out.items)]
        out.collapsed=false
      }
    }
    return out
  }
  // Only theme and locale objects require traversal; retain unrelated Vite config.
  const result={...original,cleanUrls:false,themeConfig:walk(original.themeConfig),locales:walk(original.locales)}
  for (const section of Object.keys(catalogue.sections)) for (const lang of ['en','el']) {
    if (!seen.has(lang+':'+section)) throw new Error('Cannot find sidebar section '+lang+':'+section+' in actual configuration')
  }
  return result
}
