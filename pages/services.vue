<script>
export default {
  layout: 'custom'
}
</script>

<script setup>
import { ref } from 'vue'

const unsplashRes = await useFetch('/api/gallery')

const images = unsplashRes.data.value.response.results.map(img => ({
  "itemImageSrc": img.urls.regular,
  "thumbnailImageSrc": img.urls.thumb,
  "alt": img['alt_description'],
  "title": img['alt_description']
}))

const responsiveOptions2 = ref([
  {
      breakpoint: '768px',
      numVisible: 3
  },
  {
      breakpoint: '560px',
      numVisible: 1
  }
])

const galleryHeight = ref(600)
</script>

<template>
  <div>
    <Galleria :value="images" thumbnailsPosition="bottom" :responsiveOptions="responsiveOptions2">
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :height="`${galleryHeight}px`" :alt="slotProps.item.alt" />
      </template>

      <template #caption="slotProps">
        {{ slotProps.item.title }}
      </template>

      <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
      </template>
    </Galleria>
  </div>
</template>
