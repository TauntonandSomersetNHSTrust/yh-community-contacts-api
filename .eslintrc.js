module.exports = {
	env: {
		es2022: true,
		node: true,
	},
	extends: [
		"airbnb-base",
		"plugin:promise/recommended",
		"plugin:jest/recommended",
		"plugin:jest/style",
		"plugin:jsdoc/recommended",
		"plugin:security/recommended",
		"plugin:security-node/recommended",
		"prettier",
	],
	parserOptions: {
		ecmaVersion: 2022,
	},
	plugins: [
		"import",
		"jest",
		"jsdoc",
		"promise",
		"security",
		"security-node",
	],
	root: true,
	rules: {
		"import/no-extraneous-dependencies": "error",
		"no-multiple-empty-lines": ["error", { max: 1 }],
		"prefer-destructuring": ["error", { object: true, array: false }],
		"promise/prefer-await-to-callbacks": "warn",
		"promise/prefer-await-to-then": "warn",
	},
};
