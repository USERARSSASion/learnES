/*
 * @Author: majl
 * @Date: 2022-07-22 15:18:40
 * @LastEditors: majl
 * @LastEditTime: 2023-05-04 10:17:27
 * @FilePath: /learnES/es.js
 * @Description: 
 * 
 */
const { Client } = require('es7');
const { esConfig } = require('./config');

const elasticSearchConnection = () => {
    // Get connection options from env variable
    return new Client(esConfig);
};

const pingElasticsearch = async (client) => {
    return client.ping({
        requestTimeout: 10000,
    });
};

const elasticClient = elasticSearchConnection();

module.exports = {
  elasticClient, pingElasticsearch
}

// es 处理 readonly
// curl -XPUT -H "Content-Type:application/json" http://127.0.0.1:9200/_all/_settings -d '{"index.blocks.read_only_allow_delete":null}'