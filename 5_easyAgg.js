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
        "tendency": {
          "terms": {
            "field": "tendency",
            "size": 20
          }
        },
        // 折线图时间数量
        "sound": {
          "date_histogram": {
            "field": "modified",
            "interval": "hour",
            "time_zone": "+08:00",
            "format": "yyyy-MM-dd HH:mm"
          }
        },
        // 获取 include 中的词组数量
        "result": {
          "terms": {
            "field": "mark_info_paths",
            "include": "(/金融/风声/.*)|(/全局废文/.*)",
            "size": 100
          }
        },
        // 相似文数量排名前多少
        "hotArticle": {
          "terms": {
            "field": "rel",
            "size": 10,
          },
          "aggs": {
            "hits": {
              "top_hits": {
                "sort": [
                  {
                    "rank": {
                      "order": "desc"
                    }
                  }
                ],
                "_source": {
                  "include": [
                    "rel",
                    "title",
                    "uri",
                    "media",
                    "channel",
                    "created",
                    "tendency",
                    "media_type",
                    "doc_subject",
                    "rank",
                    "author"
                  ]
                },
                "size": 1
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
