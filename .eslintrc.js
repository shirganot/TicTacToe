module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['/node_modules/**', '/build/**'],
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'prettier/prettier': ['error'],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['^draft'] },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
