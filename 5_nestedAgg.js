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

// {
//   "aggs" : {
//     "age_terms" : {
//       "terms" : { 
//         "field" : "name",
//         "size" : 10,      #size用来定义需要返回多个 buckets（防止太多），默认会全部返回。
//         "order" : { "_count" : "asc" },  #根据文档计数排序，根据分组值排序（{ "_key" : "asc" }）
//         "min_doc_count": 10,            #只返回文档个数不小于该值的 buckets
//         "include" : ".*sport.*",        #包含过滤
//         "exclude" : "water_.*",         #排除过滤
//         "missing": "N/A" 
//       }
//     }
//   }
// }

// {
//   "aggs" : {
//     "prices" : {
//       "histogram" : {
//         "field" : "price",      //字段，必须为数值类型
//         "calendar_interval" : 50,       //分桶间距
//         "min_doc_count" : 1,    //最少文档数桶过滤，只有不少于这么多文档的桶才会返回
//         "extended_bounds" : { //范围扩展
//           "min" : 0,
//           "max" : 500
//         },
//         "order" : { "_count" : "desc" },//对桶排序，如果 histogram 聚合有一个权值聚合类型的"直接"子聚合，那么排序可以使用子聚合中的结果
//         "keyed":true, //hash结构返回，默认以数组形式返回每一个桶
//         "missing":0 //配置缺省默认值
//       }
//     }
//   }
// }