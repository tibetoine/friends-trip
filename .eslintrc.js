module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-default-prop': 'off',
    'import/no-unresolved': 'off',
    'no-var': 2,
    'prefer-const': 2,
    ignorePropertyModificationsFor: { props: false }
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
