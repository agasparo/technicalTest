module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['jsx-a11y', 'prettier', '@typescript-eslint'],
  extends: [
    'standard',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/no-extraneous-dependencies': [
      1,
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: true,
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/camelcase': 0,
    'no-shadow': 0,
    'no-case-declarations': 0,
    'no-console': 1,
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
  },
};
