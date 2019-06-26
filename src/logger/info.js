'use strict'

const color = require('colors');


function info(text) {
    return color.green('[info]' + text);
}

module.exports = info