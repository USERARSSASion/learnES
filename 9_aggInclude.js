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
      "track_total_hits": true,
      "query": {
        "bool": {
          "must": [
            {
              "nested": {
                "path": "projects",
                "query": {
                  "bool": {
                    "must": [
                      {
                        "match": {
                          "projects.project_id": "cjsc.project1"
                        }
                      }
                    ],
                    "must_not": [
                      {
                        "match": {
                          "projects.deleted": "YES"
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              "range": {
                "created": {
                  "from": "2022/09/01 00:00:00 +08:00",
                  "to": "2022/10/01 23:59:59 +08:00"
                }
              }
            }
          ],
          "must_not": [],
          "should": []
        }
      },
      "from": 0,
      "size": 1,
      "sort": {
        "created": {
          "order": "asc"
        }
      },
      "_source": [
        "id"
      ],
      "aggs": {
        "topicAgg": {
          "nested": {
            "path": "projects"
          },
          "aggs": {
            "top_num": {
              "terms": {
                "field": "projects.topic_paths",
                "include": "/对标新闻/[^/]*",
                "size": 100
              },
              "aggs": {
                "tendency": {
                  "terms": {
                    "field": "projects.tendency"
                  }
                }
              }
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


// {
//   "track_total_hits": true,
//   "_source": true,
//   "query": {
//     "bool": {
//       "must": [
//         {
//           "range": {
//             "created": {
//               "gte": "2023/05/14 00:00:00 +08:00",
//               "lte": "2023/05/15 23:59:59 +08:00"
//             }
//           }
//         },
//         {
//           "query_string": {
//             "query": "\"国安\"",
//             "default_operator": "AND",
//             "phrase_slop": 0,
//             "fields": [
//               "title"
//             ]
//           }
//         }
//       ],
//       "must_not": [
//         {
//           "term": {
//             "media_type": "comment"
//           }
//         },
//         {
//           "terms": {
//             "art_status": [
//               "DELETED"
//             ]
//           }
//         },
//         {
//           "term": {
//             "project_info.deleted": "YES"
//           }
//         }
//       ],
//       "should": []
//     }
//   },
//   "from": 0,
//   "size": 1,
//   "sort": [
//     {
//       "created": {
//         "order": "desc"
//       }
//     }
//   ],
//   "aggs": {
//       "platform": {
//           "terms": {
//               "field":  "content_region_paths",
//               "size": 20,
//               "include": "/[^/]*/[^/]*"
//           }
//       }
//   }
// }

// 正则 include 每一个 /[^/]* 就是匹配 一个 / 后的数据结构。字段的数据结构需要时 path 类型(/a/b/c)