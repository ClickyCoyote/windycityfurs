import js from '@eslint/js'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  globalIgnores(['**/dist/*', '**/node_modules/*']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  typescriptEslint.configs.recommended,
  pluginVue.configs['flat/strongly-recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { parser: typescriptEslint.parser },
    },
    rules: {
      'multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
  eslintConfigPrettier,
])
