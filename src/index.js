/**
 * @name logger
 * @description logger
 * @license MIT
 * @author Seoa Develoment Team
 * @version 0.1.0
 */

'use strict'
//https://najsulman.tistory.com/439

module.exports = {
  info: require('./logger/info'),
  error: require('./logger/error'),
  debug: require('./logger/debug'),
  warn: require('./logger/warn'),
  random: require('./logger/random'),
  raindom: require('./logger/rainbow'),
  log: require('./logger/log'),
  success: require('./logger/success')
}