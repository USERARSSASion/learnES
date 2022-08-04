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
            "terms": {
              "_id": ["97907ddc01a111edbf3be4434b9f8d54"]
            },
          },{
            "query_string": {
              "query": "\"燃气大王\"",
              "fields": [
                "title"
              ]
            }
          }],
          "must_not": [],
          "should": [{
            "wildcard": {
              "uri": "*GTG2530552BGPP*"
            }
          }]
        }
      }
    }
  })
  console.log(result.body);
}

run();

/*
Es 模糊查询， 分词的用match； 短语的用match_phrase；查询任意的，用wildcard通配符，注意查询的内容是否分词，分词的添加keyword，查询非空的情况，用*。
*/