import { app } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import 'primevue/resources/primevue.css'
import 'primeicons/primeicons.css'

app.use(PrimeVue, { ripple: true });

export const decorators = [(story) => ({
  components: {
    story,
  },
  template: '<story />'
})]

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
