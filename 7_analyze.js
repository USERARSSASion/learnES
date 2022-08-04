const { elasticClient } = require('./es');

const projectElasticConfig = {
  index: 'test-entities-202207',
};

async function run() {
  const result = await elasticClient.indices.analyze({
    ...projectElasticConfig,
    body: {
      text: "我们大家的中华人民共和国",
      // analyzer: "whitespace",
      // analyzer: "path-analyzer",
      // analyzer: "hanlp_index", // 更详细的词组合，会比原语句长
      analyzer: "hanlp_standard", // 与原语句长一样长
    }
  })
  console.log(result.body);
}

run();
