import nextPlugin from '@next/eslint-plugin-next'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default [
  { ignores: ['node_modules/', '.next/', 'resources/**'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
    },
    plugins: { '@next/next': nextPlugin, '@typescript-eslint': tsPlugin, 'react': reactPlugin, 'react-hooks': reactHooksPlugin },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...tsPlugin.configs['recommended'].rules,
      '@typescript-eslint/no-unused-vars': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
]
