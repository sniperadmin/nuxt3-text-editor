module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials"
  ],
  core: {
    builder: "storybook-builder-vite"
  }
}
