'use strict'

const color = require('colors');


function error(text) {
    return color.red('[error]' + text);
}

module.exports = error