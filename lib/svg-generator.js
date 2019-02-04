const assert = require('assert');

/**
 * Calculate a font which works well for the given width and height
 * @param width {Number} the width of the image
 * @param height {Number} the height of the image
 * @returns {Number} fontSize
 */
function calculateScaledFontSize(width, height) {
	return Math.round(Math.max(12, Math.min(Math.min(width, height) * 0.75, (0.75 * Math.max(width, height)) / 12)));
}

/**
 * @param svgProperties {object} configuration to generate the svg
 */
module.exports = function generateSvg(svgProperties) {
	assert(svgProperties.height, 'Height is required');
	assert(svgProperties.width, 'Width is required');

	const { width, height } = svgProperties;
	const fontSize = svgProperties.fontSize || calculateScaledFontSize(svgProperties.width, svgProperties.height);
	const backgroundColor = svgProperties.backgroundColor || 'eeeeee';
	const fontColor = svgProperties.fontColor || 'aaaaaa';

	return (
		'' +
		`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
  <rect width="${width}" height="${height}" fill="#${backgroundColor}"/>
  <text text-anchor="middle" x="${width / 2}" y="${height / 2}"
    style="fill:#${fontColor};font-weight:bold;font-size:${fontSize}px;font-family:Arial,Helvetica,sans-serif;dominant-baseline:central">
    ${width}x${height}
  </text>
</svg>`
	);
};
