var express = require('express');
var svgGenerator = require('./lib/svg-generator.js');
var _ = require('lodash');

module.exports = function svgPlaceholderMiddleware () {
  var app = express();
  app.get([
    '/:size',
    '/:size/:backgroundColor/',
    '/:size/:backgroundColor/:fontColor'
  ], function (req, res, next) {
    // Parse /10x10 or /10
    var size = /^(\d{1,5})(?:x(\d{1,5})$|$)/.exec(req.params.size);
    if (!size) {
      return next();
    }
    var svgProperties = _.merge({}, {
      width: parseInt(size[1], 10),
      height: parseInt(size[2], 10) || parseInt(size[1], 10)
    }, req.params);
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.end(svgGenerator(svgProperties));
  });
  return app;
};
