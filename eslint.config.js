import nuxt from '@nuxt/eslint-config/flat'

export default nuxt(
  {
    files: ['*.vue'],
    rules: {
      'vue/multi-word-component-names': 'error'
    }
  },
  {
    files: ['app.vue', 'error.vue', 'pages/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      // disable the rule for these files
      'vue/multi-word-component-names': 'off'
    }
  }
)
