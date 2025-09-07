import stylistic from '@stylistic/eslint-plugin'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    ignores: ['dist/**/*', '**/*.d.ts', `stories/**/*`],
  },
  ...vue.configs['flat/recommended'],
  {
    files: ['src/**/*.{ts,js,vue}', 'stories/**/*.{ts}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          js: tsParser,
          ts: tsParser
        },
        project: './tsconfig.eslint.json',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    processor: vue.processors['.vue'],
    plugins: {
      import: importPlugin,
      '@typescript-eslint': tsPlugin,
      '@stylistic': stylistic,
      vue
    },
    rules: {
      // common
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'eslint/no-negated-condition': 'off',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'type',
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index']
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          pathGroups: [
            { pattern: 'vue{,/**}', group: 'external', position: 'before' },
            { pattern: 'vue-router{,/**}', group: 'external', position: 'before' },
            { pattern: 'pinia{,/**}', group: 'external', position: 'before' },
            { pattern: '@/store/**', group: 'internal', position: 'before' },
            { pattern: '@/composible/**', group: 'internal', position: 'before' },
            { pattern: '@/service/**', group: 'internal', position: 'before' },
            { pattern: '@/routes/**', group: 'internal', position: 'before' },
            { pattern: '@/consts/**', group: 'internal', position: 'before' },
            { pattern: '@/utils/**', group: 'internal', position: 'before' },
            { pattern: '@/pages/**', group: 'internal', position: 'before' },
            { pattern: '@/components/**', group: 'internal', position: 'before' },
            { pattern: '@/icons/**', group: 'internal', position: 'before' },
            { pattern: '@/styles/**', group: 'internal', position: 'before' },
            { pattern: '@/assets/**', group: 'internal', position: 'after' },
            { pattern: '@/types/**', group: 'internal', position: 'after' },
            { pattern: '@/**', group: 'internal', position: 'before' }
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'external']
        }
      ],

      // TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-undef': 'off',
      '@typescript-eslint/explicit-function-return-type': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': ['error'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-assertions': ['warn', {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
      }],
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'warn',
      '@typescript-eslint/consistent-type-imports': ['warn', {
        prefer: 'type-imports',
        disallowTypeAnnotations: false
      }],

      // @stylistic
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/no-multi-spaces': 'warn',
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return'
        }
      ],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-bracket-spacing': ['error', 'always', { singleValue: false }],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/dot-location': ['error', 'object'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/function-paren-newline': ['error', 'consistent'],
      '@stylistic/implicit-arrow-linebreak': ['error', 'below'],
      '@stylistic/indent': ['error', 'tab'],
      '@stylistic/indent-binary-ops': ['error', 2],
      '@stylistic/line-comment-position': ['error', { position: 'above' }],
      '@stylistic/multiline-comment-style': ['error', 'starred-block'],
      '@stylistic/lines-around-comment': ['error', { beforeBlockComment: true }],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/lines-between-class-members': ['error', 'always'],
      '@stylistic/max-statements-per-line': ['error', { max: 1, ignoredNodes: ['BreakStatement'] }],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/new-parens': 'error',
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      '@stylistic/no-confusing-arrow': 'error',
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      '@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
      '@stylistic/no-trailing-spaces': ['error', { ignoreComments: true }],
      '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
      '@stylistic/operator-linebreak': ['error', 'before'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/brace-style': [
        'error',
        'stroustrup',
        {
          allowSingleLine: true
        }
      ],

      // Vue
      'vue/no-mutating-props': 'warn',
      'vue/no-reserved-component-names': 'error',
      'vue/no-unused-vars': 'warn',
      'vue/html-self-closing': ['warn', {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }],
      "vue/define-macros-order": ["error", {
        "order": ['defineProps', 'defineModel', 'defineEmits', 'defineSlots'],
        "defineExposeLast": true
      }],
      'vue/require-default-prop': 'error',
      'vue/multi-word-component-names': 'error',
      'vue/valid-v-slot': 'error',
      'vue/no-unused-components': 'warn',
      'vue/comment-directive': ['error', {
        reportUnusedDisableDirectives: false
      }],
      'vue/no-setup-props-reactivity-loss': ['warn']
    }
  }]

