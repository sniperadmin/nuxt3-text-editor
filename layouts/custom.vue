<script setup>
import { ref } from 'vue'

const visibleLeft = ref(true)

const links = ref([
  {
    label: 'Home',
    url: '/',
    icon:'pi pi-fw pi-home'
  },
  {
    label: 'CV',
    icon:'pi pi-fw pi-file',
    items: [
      {
        label: 'Experiences',
        url: '/carri',
        icon: 'pi pi-fw pi-file',
      }
    ]
  },
  {
    label: 'About',
    url: '/about',
    icon:'pi pi-fw pi-external-link'
  },
  {
    label: 'Services',
    url: '/services',
    icon:'pi pi-fw pi-pencil',
  },
])
</script>

<template>
  <div>
    <Menubar :model="links">
      <template #start class="mr-3">
        Nash Development
      </template>
    </Menubar>
    <slot />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
