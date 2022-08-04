const { elasticClient } = require('./es');

const projectElasticConfig = {
  index: 'test-entities-202207',
  _source: true,
};

async function run() {
  const result = await elasticClient.search({
    ...projectElasticConfig,
    size: 1,
    from: 0,
    body: {
      query: {
        "bool": {
          "must": [{
            "range": {
              "created": {
                "from": "2022/06/24 00:00:00 +08:00",
                "to": "2022/07/01 23:59:59 +08:00"
              }
            }
          },
          // 标题内容搜索
          {
            "query_string": {
                "query": `\"${title}\"`,
                "fields": [
                    "title",
                    "body"
                ]
            }
          }],
          "must_not": [],
          "should": []
        }
      }
    }
  })
  console.log(result.body);
}

run();
