module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,css,html,js,json}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};