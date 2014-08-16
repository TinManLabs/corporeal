
'use strict';
var winston = require('winston');
var log = {
  /**
   * 
   */
  debug : function() {
    winston.debug.apply(arguments);
  },
  info : function() {
    winston.info.apply(arguments);
  },
  warn : function() {
    winston.warn.apply(arguments);
  },
  error : function() {
    winston.error.apply(arguments);
  }
}

module.exports = log;
