module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
  ],
  // 覆盖或新增一些规则
  rules: {
    'no-undef': 1,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'none'
      }
    ]
  }
}
