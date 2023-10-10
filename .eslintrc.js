module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@next/eslint-plugin-next', 'react', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    "prettier/prettier": ["error",{ tabWidth: 4 }],
    "@typescript-eslint/no-unused-vars" : "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
