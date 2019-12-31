module.exports = api => {
	api.cache(false);
	const presets = ['@babel/preset-env'];
	const plugins = [
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-unicode-property-regex',
		'@babel/plugin-transform-dotall-regex',
		['@babel/plugin-proposal-class-properties', { loose: false }],
		['@babel/plugin-proposal-private-methods', { loose: false }],
		'@babel/plugin-proposal-json-strings',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-import-meta'
	];
	return { plugins: plugins, presets: presets }; // or { plugins, presets }, as is usually preferred
};
