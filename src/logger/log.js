'use strict'

const color = require('colors');


function log(text) {
    return color.green("[log]" + text);
}

module.exports = log