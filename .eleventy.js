module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("icons");
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("scripts");
	eleventyConfig.addPassthroughCopy("lib");
	eleventyConfig.addPassthroughCopy(".nojekyll");

	eleventyConfig.addPairedShortcode("Gallery", function (content) {
		return "<div class=\"image-mosaic\">" + content + "</div>"
	});

	eleventyConfig.addShortcode("GalleryImage", function (imageDir, imageFile, size) {
		var cardClass = "card ";
		switch (size) {
			case "wide":
				cardClass += "card-wide ";
				break;
			case "xwide":
				cardClass += "card-xwide ";
				break;
			case "tall":
				cardClass += "card-tall ";
				break;
			case "xtall":
				cardClass += "card-xtall ";
				break;
			case "large":
				cardClass += "card-tall card-wide "
				break;
			case "xlarge":
				cardClass += "card-xtall card-xwide "
		}

		var result = '<a data-gallery="page-photos" href="/images/' + imageDir + '/' + imageFile + '" style="background-image: url(\'/images/' + imageDir + '/small/' + imageFile + '\')" class="' + cardClass + 'glightbox"></a>';
		return result;
	});

	eleventyConfig.addShortcode("FullWidthImage", function (imageDir, imageFile, imageCaption) {
		var result = '<div><a data-gallery="page-photos" href="/images/';
		result += imageDir;
		result += '/';
		result += imageFile;
		result += '" class="glightbox">';
		result += '<img src="/images/';
		result += imageDir;
		result += '/small/';
		result += imageFile;

		if(imageCaption) {
			result += '" class="fullwidth-photo" /></a></div>';
			result += '<div class="fullwidth-photo-caption">' + imageCaption + '</div>';
		} else {
			result += '" class="fullwidth-photo nocaption" /></a></div>';
		}
		return result;
	});


	return {
		dir: {
			input: "src",
			output: "_site"
		}
	}
};
