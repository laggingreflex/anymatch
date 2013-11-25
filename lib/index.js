// Generated by CoffeeScript 1.6.3
var anymatch, minimatch;

minimatch = require('minimatch');

anymatch = function(criteria, string) {
  if ('[object Array]' !== toString.call(criteria)) {
    criteria = [criteria];
  }
  return criteria.some(function(criterion) {
    switch (toString.call(criterion)) {
      case '[object String]':
        return string === criterion || minimatch(string, criterion);
      case '[object RegExp]':
        return criterion.test(string);
      case '[object Function]':
        return criterion(string);
      default:
        return false;
    }
  });
};

anymatch.matcher = function(criteria) {
  return anymatch.bind(null, criteria);
};

module.exports = anymatch;