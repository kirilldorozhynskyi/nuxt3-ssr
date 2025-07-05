// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
	{
		ignores: [
			'node_modules/',
			'.nuxt/',
			'dist/',
			'.output/',
			'*.log',
			'package-lock.json',
			'Dockerfile',
			'.dockerignore',
			'README.md',
			'CHANGELOG.md',
		],
	},
	{
		rules: {
			// Vue specific rules
			'vue/multi-word-component-names': 'off',
			'vue/no-unused-vars': 'error',
			'vue/no-unused-components': 'error',

			// TypeScript rules
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',

			// General rules
			'no-console': 'warn',
			'no-debugger': 'error',
			'prefer-const': 'error',
			'no-var': 'error',
		},
	},
	{
		files: ['**/*.vue'],
		rules: {
			'vue/component-name-in-template-casing': ['error', 'PascalCase'],
			'vue/component-definition-name-casing': ['error', 'PascalCase'],
			'vue/prop-name-casing': ['error', 'camelCase'],
			'vue/attribute-hyphenation': ['error', 'always'],
			'vue/v-on-event-hyphenation': ['error', 'always'],
		},
	},
])
