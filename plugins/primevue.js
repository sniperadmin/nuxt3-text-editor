import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Menubar from 'primevue/menubar';
import Sidebar from 'primevue/sidebar';
import Galleria from 'primevue/galleria';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component('Button', Button);
  //other components that you need
  nuxtApp.vueApp.component('Menubar', Menubar);
  nuxtApp.vueApp.component('Sidebar', Sidebar);
  nuxtApp.vueApp.component('Galleria', Galleria);
});
