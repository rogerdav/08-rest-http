'use strict';

const urlParser = require('url');
const queryString = require('querystring');
const debug = require('debug')('http:url-parser');

module.exports = function(request) {
  return new Promise((resolve, reject) => {
    request.url = urlParser.parse(request.url);
    request.url.query = queryString.parse(request.url.query);
    debug('req url string id', request.url.query._id);

    return resolve(request);
  });

};
