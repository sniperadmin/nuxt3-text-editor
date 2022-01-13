import TestBtn from './TestBtn.vue';

export default {
  title: 'PrimeBtn',
  component: TestBtn,
  argTypes: {}
}

const Template = (args) => ({
  components: {TestBtn},
  setup() {
    return {
      args
    }
  },
  template: '<TestBtn v-bind="args" />'
})

export const Primary = Template.bind({})