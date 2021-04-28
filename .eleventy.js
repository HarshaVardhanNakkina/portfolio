module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/assets');
	eleventyConfig.addWatchTarget('./src/sass/');
	return {
		passthroughFileCopy: true,
		dir: {
			input: 'src'
		}
	};
};
