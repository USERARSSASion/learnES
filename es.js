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
