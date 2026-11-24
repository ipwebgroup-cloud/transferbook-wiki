// TRANSFERBOOK WIKI DATA-DRIVEN NAVIGATION v1
import original from './config.base.mjs'
import catalogue from './wiki-navigation.json'
import { reconcile } from './wiki-navigation.mjs'
const config = reconcile(original, catalogue)
// Local search stays entirely inside the built Wiki. Greek interface strings only.
config.themeConfig.search = {
  ...config.themeConfig.search,
  options: {
    ...config.themeConfig.search.options,
    locales: {
      ...config.themeConfig.search.options?.locales,
      el: {
        translations: {
          button: { buttonText: 'Αναζήτηση', buttonAriaLabel: 'Αναζήτηση' },
          modal: {
            displayDetails: 'Εμφάνιση λεπτομερειών',
            resetButtonTitle: 'Εκκαθάριση αναζήτησης',
            backButtonTitle: 'Πίσω',
            noResultsText: 'Δεν βρέθηκαν αποτελέσματα για',
            footer: {
              selectText: 'επιλογή', selectKeyAriaLabel: 'Enter',
              navigateText: 'πλοήγηση', navigateUpKeyAriaLabel: 'Επάνω',
              navigateDownKeyAriaLabel: 'Κάτω', closeText: 'κλείσιμο',
              closeKeyAriaLabel: 'Escape'
            }
          }
        }
      }
    }
  }
}
Object.assign(config.locales.el.themeConfig, {
  sidebarMenuLabel: 'Μενού', returnToTopLabel: 'Επιστροφή στην κορυφή',
  darkModeSwitchLabel: 'Εμφάνιση', lightModeSwitchTitle: 'Φωτεινή εμφάνιση',
  darkModeSwitchTitle: 'Σκούρα εμφάνιση', langMenuLabel: 'Γλώσσα'
})
export default config
