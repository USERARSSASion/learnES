/*
 * @Author: majl
 * @Date: 2022-07-22 15:18:27
 * @LastEditors: majl
 * @LastEditTime: 2024-03-29 11:22:26
 * @FilePath: /learnES/config.js
 * @Description: 
 * 
 */
const esConfig = {
  node: process.env.ESHOST || 'http://192.168.5.203:9200' || 'http://192.168.4.246:9200/',
  // log: process.env.ES_LOGGING || 'trace',
  // requestTimeout: +process.env.ES_REQUEST_TIMEOUT || 10000,
};

module.exports = {
  esConfig
}
