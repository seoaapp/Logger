'use strict'

const color = require('colors');


function warn(text) {
    return color.red('[warn]' + text);
}

module.exports = warn