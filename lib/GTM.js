'use strict';

var Version = require('./Version');
var Event = require('./Event');
var virtualPageview = require('./Virtualpageview');


var GTM = {

  Event: Event,

  virtualPageview: virtualPageview,

  Version: Version,

};


module.exports = GTM;