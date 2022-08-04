const esConfig = {
  node: process.env.ESHOST || 'http://192.168.4.246:9200/',
  // log: process.env.ES_LOGGING || 'trace',
  // requestTimeout: +process.env.ES_REQUEST_TIMEOUT || 10000,
};

module.exports = {
  esConfig
}
