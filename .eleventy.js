module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("icons");
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy(".nojekyll");
	return {
		dir: {
			input: "src",
			output: "docs"
		}
	}
};
