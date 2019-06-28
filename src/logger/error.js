'use strict'

const color = require('colors');


function error(text) {
    return color.bgRed('[error]' + text);
}

module.exports = error