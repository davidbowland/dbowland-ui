// Fleet ESLint flat config — UI (React / CRA / Next-style TypeScript) flavor.
// ESLint 9 + typescript-eslint 8 + eslint-plugin-react. Translated from the
// fleet's .eslintrc.json (food-ui / pick-a-time-ui) preserving original intent.
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import jest from 'eslint-plugin-jest'
import react from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // CRITICAL: ESLint 9 flat config does NOT implicitly skip dot-directories.
  // `.next/` and `.swc/` build caches exist locally after a build/dev run and
  // MUST stay ignored, or `eslint .` floods with thousands of errors.
  {
    ignores: [
      '**/__mocks__/',
      '**/__snapshots__/',
      '.cache/',
      '.next/',
      '.swc/',
      'coverage/',
      'deploy/',
      'jest.*.*',
      'next-env.d.ts',
      'node_modules/',
      'out/',
      'package-lock.json',
      'public/',
      'static/',
      '**/*.min.*',
    ],
  },

  // Base recommended sets.
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,

  // Language options + fleet rule intent (from food-ui / pick-a-time-ui).
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser,
        exports: 'writable',
        module: 'readonly',
        require: 'readonly',
      },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '_', ignoreRestSiblings: true, varsIgnorePattern: '_' },
      ],
      'no-negated-condition': 'error',
      'react/react-in-jsx-scope': 'off',
      // Preserved from the original .eslintrc.json: TypeScript's own type
      // checking covers prop types here; react/prop-types produces false
      // positives against this repo's separately-declared prop interfaces.
      'react/prop-types': 'off',
      'react/jsx-curly-brace-presence': ['error', { children: 'never', propElementValues: 'always', props: 'never' }],
      'react/jsx-sort-props': 'error',
      'sort-vars': 'error',
    },
  },

  // Node scripts / config files may use CommonJS require().
  {
    files: ['scripts/**/*.{js,mjs,cjs,ts}', '*.config.{js,mjs,cjs,ts}', 'next.config.*'],
    languageOptions: { globals: { ...globals.node } },
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },

  // Jest rules scoped to test / mock / test-support files only.
  {
    files: [
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*TestUtils.{ts,tsx}',
      '**/__tests__/**/*.{ts,tsx}',
      '**/__mocks__/**/*.{ts,tsx}',
    ],
    ...jest.configs['flat/recommended'],
    settings: { jest: { version: 29 } },
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/no-mocks-import': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // Prettier LAST — disables all formatting rules that would fight prettier.
  prettier,
)
