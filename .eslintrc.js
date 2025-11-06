module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:react-redux/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    project: 'tsconfig.eslint.json',
    sourceType: 'module'
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  plugins: ['import', '@typescript-eslint', 'eslint-plugin-import-helpers', 'react-redux', 'sonarjs', 'jest'],
  rules: {
    'react/jsx-no-bind': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        groups: ['/^react/', 'module', ['parent', 'sibling', 'index'], '/.*(css|scss)$/'],
        alphabetize: { order: 'asc', ignoreCase: true },
        newlinesBetween: 'always'
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/no-unused-prop-types': 'off',
    curly: ['error', 'all']
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  },
  parser: '@typescript-eslint/parser'
};
