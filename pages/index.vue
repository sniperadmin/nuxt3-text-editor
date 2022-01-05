<script lang="ts">
  export default {
    layout: 'custom',
    components: {}
  }
</script>

<script setup lang="ts">
  import Splitter from 'primevue/splitter';
  import SplitterPanel from 'primevue/splitterpanel';
  import { useMotion } from '@vueuse/motion'

  const code = {
    line1: '<script type="text/javascript">',
    line2: '<script src="file.js" type="text/javascript">'
  }

  const target = ref(null)

// Get the variant from target motion instance.
const { apply } = useMotion(target, {
  initial: {
    scale: 1,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    scale: 1,
  },
})

const customEvent = async () => {
  // Animate to a temporary variant.
  await apply({
    scale: 2,
    transition: {
      type: 'spring',
      damping: 100,
    },
  })

  // Revert back to enter state
  await apply('enter')
}
</script>

<template>
  <Splitter style="height: 300px">
    <SplitterPanel>
      <pre
        v-highlightjs
        v-motion="apply"
      >
        <code ref="target" class="html">
          <template v-for="(value, key, index) in code">
            {{value}}
          </template>
        </code>
      </pre>
    </SplitterPanel>

    <SplitterPanel>
      <div v-motion-pop-bottom>
        Panel 2
        Some animated text 🎺
      </div>
    </SplitterPanel>
  </Splitter>
</template>