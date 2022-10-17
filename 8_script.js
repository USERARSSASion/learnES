const { elasticClient } = require('./es');

const projectElasticConfig = {
  index: 'test-entities-202207',
};

let getSourceForUpdate = function(obj){
  let source = "";
  let params = {
      industry_paths: toES_industry_paths(obj),
      tendency: obj.tendency,
      entities: toES_entities(obj),
      content_risks: toES_risk_paths(obj),
      edited_at: moment().format('YYYY/MM/DD HH:mm:ss Z'),
      art_status: 'EDITED',
  };
  _.forOwn(params, (v, k) => {
      if(v === null)
          return;

      source += `ctx._source.${k} = params.${k};`
  })

  return {source, params};
}

async function run() {
  let {source, params} = getSourceForUpdate(body);

  let query = {
    "script": {
        "source": source,
        "params": params,
        "lang": "painless"
    },
    "query": {
        "term": {
            "rel": rel
        }
    }
  };

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
