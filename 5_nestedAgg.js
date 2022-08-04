const { elasticClient } = require('./es');

const projectElasticConfig = {
  index: 'test-entities-202207',
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
          }],
          "must_not": [],
          "should": []
        }
      },
      "aggs": {
        // 倾向分布数据、媒体分布数据等
        "navCounts": {
          "nested": {
              "path": "projects"
          },
          "aggs": {
            "result": {
              "filter": {
                "bool": {
                  "must": [
                    {
                      "term": {
                        "projects.project_id": 'fengsheng.project1'
                      }
                    },
                    {
                      "terms": {
                        "projects.topic_paths": '/风声'
                      }
                    }
                  ]
                }
              },
              "aggs": {
                "result": {
                  "terms": {
                  "field": "projects.topic_paths",
                  "size": 20
                  }
                }
              },
              // 合上嵌套
              // "aggs": {
              //   "abc": {
              //     "reverse_nested": {},
              //     "aggs": {
              //       "top_tags_per_comment": {
              //         "terms": {
              //           "field": "tags"
              //         }
              //       }
              //     }
              //   }
              // }
            }
          }
        }
      }
    }
  })
  console.log(result.body.aggregations);
}

run();
