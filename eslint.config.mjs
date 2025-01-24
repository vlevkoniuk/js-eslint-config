import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		languageOptions: { globals: globals.browser }
	},
	pluginJs.configs.recommended,
	{
        name: 'best practices rules',
        files: ["**/*.js"],
		rules: {
			...pluginJs.configs.recommended.rules,
			semi: ["error", "always"],
			indent: ['error', 4],
			'max-len': [
                'warn',
                {
                    code: 140,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                }
			],
			'brace-style': ['warn'],
			'comma-dangle': ['error', 'never'],
            'no-multiple-empty-lines': ['error', { max: 2 }],
            'no-trailing-spaces': ['error', { 'skipBlankLines': false }],
            'eol-last': ['error', 'always']
		}
    }
];