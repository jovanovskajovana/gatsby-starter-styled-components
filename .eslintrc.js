module.exports = {
  extends: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 0,
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
        endOfLine: 'lf',
        semi: false,
        tabWidth: 2,
      },
    ],
  },
  plugins: ['prettier'],
}
