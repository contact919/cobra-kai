module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
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
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        // Place to specify ESLint rules.
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/triple-slash-reference': 0,
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off'
      }
    }
  ]
}
