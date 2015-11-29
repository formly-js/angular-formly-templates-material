var _ = require('underscore');
var test = require('./test');
var dist = require('./dist');
var prod = require('./prod');
var common = {
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        extensions: ["", ".js"]
    },
    externals: [
        'angular'
    ]
    /*externals: {
     angular: 'angular',
     'angular-messages': 'ngMessages',
     'angular-material': 'ngMaterial',
     'angular-formly': 'formly'
     }*/
};

module.exports = {
    test: _.extend({}, common, test),
    dist: _.extend({}, common, dist),
    prod: _.extend({}, common, prod)
};