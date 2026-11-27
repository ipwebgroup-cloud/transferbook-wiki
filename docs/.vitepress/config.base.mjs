import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'

const sections = JSON.parse(
  readFileSync(
    new URL('./navigation.json', import.meta.url),
    'utf8'
  )
)

function navigation(lang) {
  const greek = lang === 'el'
  const base = greek ? '/el/' : '/'

  const items = sections.map(section => ({
    text: section[lang],
    link: `${base}${section.slug}/`
  }))

  // WP-WIKI-007BC operator navigation
  const operatorGroups = [{"en":"Reservations","el":"Κρατήσεις","items":[{"slug":"create-reservation","en":"Create a reservation","el":"Δημιουργία κράτησης"},{"slug":"passenger-information","en":"Passenger information","el":"Στοιχεία επιβάτη"},{"slug":"reservations","en":"Find and review reservations","el":"Αναζήτηση και έλεγχος κρατήσεων"},{"slug":"reservation-lifecycle","en":"Reservation lifecycle","el":"Κύκλος ζωής κράτησης"}]},{"en":"Dispatch","el":"Αναθέσεις","items":[{"slug":"dispatch-schedule","en":"Dispatch schedule","el":"Πρόγραμμα αναθέσεων"},{"slug":"assignments","en":"Driver and vehicle assignment","el":"Ανάθεση οδηγού και οχήματος"}]},{"en":"Pricing","el":"Τιμολόγηση","items":[{"slug":"pricing","en":"Review a quotation","el":"Έλεγχος τιμολόγησης"},{"slug":"manual-quotations","en":"Manual quotations","el":"Χειροκίνητες προσφορές"}]}]
  const sidebarItems = items.map(item => {
    // WP-WIKI-007E website navigation
    if (item.link === `${base}websites/`) {
      const websiteArticles = [{"slug":"studio-overview","en":"Website Studio overview","el":"Επισκόπηση Website Studio"},{"slug":"pages-and-sections","en":"Pages, sections and navigation","el":"Σελίδες, ενότητες και πλοήγηση"},{"slug":"responsive-preview","en":"Responsive device previews","el":"Προεπισκόπηση ανά συσκευή"},{"slug":"design-and-localization","en":"Design system, languages and SEO","el":"Σχεδιασμός, γλώσσες και SEO"},{"slug":"portable-packages","en":"Import and export design packages","el":"Εισαγωγή και εξαγωγή πακέτων"},{"slug":"draft-storage","en":"Local drafts and recovery","el":"Τοπικά προσχέδια και ανάκτηση"},{"slug":"template-manager","en":"Template Manager and channel drafts","el":"Template Manager και προσχέδια καναλιών"},{"slug":"publication-controls","en":"Review, approval and publication","el":"Έλεγχος, έγκριση και δημοσίευση"},{"slug":"independent-design","en":"Independent design workstation","el":"Ανεξάρτητος σταθμός σχεδιασμού"}]
      return {
        ...item,
        collapsed: false,
        items: websiteArticles.map(article => ({
          text: article[lang],
          link: `${base}websites/${article.slug}`
        }))
      }
    }
    // WP-WIKI-007G integration navigation
    const referenceSections = {"integrations":[{"slug":"activation-and-channels","en":"Integration readiness and channels","el":"Διαθεσιμότητα και κανάλια διασύνδεσης"},{"slug":"conversational-booking","en":"Conversational booking and consent","el":"Κρατήσεις μέσω συνομιλίας και συγκατάθεση"},{"slug":"payment-providers","en":"Payment provider readiness","el":"Ετοιμότητα παρόχων πληρωμών"},{"slug":"external-dispatch","en":"External dispatch adapters","el":"Εξωτερικές διασυνδέσεις ανάθεσης"},{"slug":"live-tracking","en":"Fleet tracking and telematics","el":"Παρακολούθηση στόλου και τηλεματική"}],"developers":[{"slug":"authentication","en":"Authentication and tenant access","el":"Ταυτοποίηση και πρόσβαση εταιρείας"},{"slug":"permissions","en":"Roles and permissions","el":"Ρόλοι και δικαιώματα"},{"slug":"reservation-api","en":"Reservation API reference","el":"Αναφορά API κρατήσεων"},{"slug":"idempotency","en":"Retry-safe reservation creation","el":"Ασφαλής επανάληψη δημιουργίας κράτησης"},{"slug":"pricing-api","en":"Pricing and tariff API","el":"API τιμολόγησης και τιμοκαταλόγων"},{"slug":"webhook-events","en":"Payment webhook events","el":"Συμβάντα webhook πληρωμών"},{"slug":"website-api","en":"Website and theme API","el":"API ιστοσελίδων και προτύπων"}]}
    for (const [section, articles] of Object.entries(referenceSections)) {
      if (item.link === `${base}${section}/`) {
        return { ...item, collapsed: false, items: articles.map(article => ({
          text: article[lang], link: `${base}${section}/${article.slug}`
        })) }
      }
    }
    // WP-WIKI-007H support navigation
    const supportSections = {"tutorials":[{"slug":"phone-only-booking","en":"Create a phone-only booking","el":"Κράτηση μόνο με τηλέφωνο"},{"slug":"return-transfer","en":"Arrange a return transfer","el":"Οργάνωση μεταφοράς με επιστροφή"},{"slug":"quote-to-dispatch","en":"From manual quote to dispatch","el":"Από χειροκίνητη προσφορά σε ανάθεση"},{"slug":"start-of-shift","en":"Start-of-shift dispatch checklist","el":"Έλεγχος αναθέσεων στην έναρξη βάρδιας"},{"slug":"website-design-handoff","en":"Transfer a website design safely","el":"Ασφαλής μεταφορά σχεδιασμού ιστοσελίδας"},{"slug":"payment-review","en":"Review a payment without charging again","el":"Έλεγχος πληρωμής χωρίς νέα χρέωση"}],"help":[{"slug":"booking-problems","en":"Booking form and submission problems","el":"Προβλήματα φόρμας και υποβολής κράτησης"},{"slug":"pricing-problems","en":"Missing tariffs and price differences","el":"Ελλιπείς τιμές και διαφορές τιμολόγησης"},{"slug":"dispatch-problems","en":"Dispatch conflicts and missing assignments","el":"Συγκρούσεις και ελλιπείς αναθέσεις"},{"slug":"access-and-session","en":"Access, permissions and session errors","el":"Πρόσβαση, δικαιώματα και σφάλματα συνεδρίας"},{"slug":"website-draft-problems","en":"Missing drafts and package errors","el":"Προσχέδια που λείπουν και σφάλματα πακέτων"},{"slug":"integration-problems","en":"Unavailable integrations and payment uncertainty","el":"Μη διαθέσιμες διασυνδέσεις και αβέβαιες πληρωμές"}]}
    for (const [section, articles] of Object.entries(supportSections)) {
      if (item.link === `${base}${section}/`) {
        return { ...item, collapsed: false, items: articles.map(article => ({
          text: article[lang], link: `${base}${section}/${article.slug}`
        })) }
      }
    }
    if (item.link !== `${base}plus/`) return item
    return {
      ...item,
      collapsed: false,
      // WP-WIKI-007F advanced navigation
      items: [...operatorGroups, ...[{"en":"Commercial operations v0.7.26","el":"Εμπορικές λειτουργίες v0.7.26","items":[{"slug":"staff-administration","en":"Staff accounts and administration","el":"Λογαριασμοί προσωπικού και διαχείριση"},{"slug":"arrival-intelligence","en":"Flight & ferry arrival intelligence","el":"Πληροφορίες αφίξεων πτήσεων και πλοίων"},{"slug":"cash-management","en":"Cash collection & office handover","el":"Είσπραξη και παράδοση μετρητών"},{"slug":"subcontractors","en":"Subcontractor operations & settlements","el":"Υπεργολάβοι και διακανονισμοί"},{"slug":"customer-booking-gateway","en":"Customer booking gateway","el":"Πύλη κρατήσεων πελατών"},{"slug":"passenger-notifications","en":"Passenger notifications & delivery history","el":"Ειδοποιήσεις επιβατών και ιστορικό παράδοσης"},{"slug":"software-update-manager","en":"Software Update Manager","el":"Διαχείριση ενημερώσεων λογισμικού"}]},{"en":"Command Center","el":"Κέντρο επιχειρήσεων","items":[{"slug":"command-center","en":"Command Center","el":"Κέντρο επιχειρήσεων"}]},{"en":"Fleet and crew","el":"Στόλος και οδηγοί","items":[{"slug":"fleet-management","en":"Fleet and vehicle classes","el":"Στόλος και κατηγορίες οχημάτων"},{"slug":"vehicle-maintenance","en":"Vehicle maintenance windows","el":"Περίοδοι συντήρησης οχημάτων"},{"slug":"drivers-and-rosters","en":"Drivers and rosters","el":"Οδηγοί και βάρδιες"},{"slug":"chauffeur-workspace","en":"Chauffeur workspace","el":"Χώρος εργασίας οδηγού"}]},{"en":"Customers and tours","el":"Πελάτες και εκδρομές","items":[{"slug":"vip-crm","en":"VIP clients and CRM","el":"Πελάτες VIP και CRM"},{"slug":"private-tours","en":"Private tours catalogue","el":"Κατάλογος ιδιωτικών εκδρομών"}]},{"en":"Administration","el":"Διαχείριση","items":[{"slug":"markets-and-locations","en":"Markets, channels and locations","el":"Αγορές, κανάλια και τοποθεσίες"},{"slug":"company-and-language-settings","en":"Company settings and languages","el":"Ρυθμίσεις εταιρείας και γλωσσών"}]},{"en":"Partners and payments","el":"Συνεργάτες και πληρωμές","items":[{"slug":"commercial-partners","en":"Commercial partners","el":"Εμπορικοί συνεργάτες"},{"slug":"payments-and-reconciliation","en":"Payments and reconciliation","el":"Πληρωμές και συμφωνία συναλλαγών"}]}]].map(group => ({
        text: group[lang],
        collapsed: false,
        items: group.items.map(article => ({
          text: article[lang],
          link: `${base}plus/${article.slug}`
        }))
      }))
    }
  })

  return {
    nav: [
      {
        text: greek ? 'Αρχική' : 'Home',
        link: base
      },
      {
        text: greek ? 'Τεκμηρίωση' : 'Documentation',
        items
      },
      {
        text: greek ? 'Βοήθεια' : 'Help',
        link: `${base}help/`
      }
    ],
    sidebar: [
      {
        text: greek ? 'Τεκμηρίωση' : 'Documentation',
        items: [
          {
            text: greek ? 'Εισαγωγή' : 'Introduction',
            link: base
          },
          ...sidebarItems
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: greek ? 'Σε αυτή τη σελίδα' : 'On this page'
    },
    docFooter: {
      prev: greek ? 'Προηγούμενη σελίδα' : 'Previous page',
      next: greek ? 'Επόμενη σελίδα' : 'Next page'
    }
  }
}

export default defineConfig({
  title: 'TransferBook+',
  description: 'Official TransferBook+ Documentation',
  appearance: true,
  lastUpdated: false,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: navigation('en')
    },
    el: {
      label: 'Ελληνικά',
      lang: 'el',
      themeConfig: navigation('el')
    }
  },

  themeConfig: {
    logo: '/branding/transferbook.svg',
    siteTitle: 'transferbook+ | Wiki',
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Official TransferBook+ Documentation',
      copyright: 'Copyright © 2026 TransferBook+'
    }
  }
})