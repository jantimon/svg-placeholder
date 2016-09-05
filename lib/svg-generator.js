var _ = require('lodash');
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var template = _.template(fs.readFileSync(path.join(__dirname, '/template.ejs')));

/**
 * Calculate a font which works well for the given width and height
 * @param width {Number} the width of the image
 * @param height {Number} the height of the image
 * @returns {Number} fontSize
 */
function calculateScaledFontSize (width, height) {
  return Math.round(Math.max(12, Math.min(Math.min(width, height) * 0.75, 0.75 * Math.max(width, height) / 12)));
}

/**
 * @param svgProperties {object} configuration to generate the svg
 */
module.exports = function generateSvg (svgProperties) {
  assert(svgProperties.height, 'Height is required');
  assert(svgProperties.width, 'Width is required');
  return template(_.extend({
    fontSize: calculateScaledFontSize(svgProperties.width, svgProperties.height),
    backgroundColor: 'eee',
    fontColor: 'aaa'
  }, svgProperties));
};
