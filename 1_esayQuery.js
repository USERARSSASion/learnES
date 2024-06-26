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

/*
{
  "track_total_hits": true,
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "media": "人民日报"
          }
        },
        {
          "bool": {
            "should": [
              {
                "terms": {
                  "media_type": [
                    "paper"
                  ]
                }
              },
              {
                "terms": {
                  "media_platform": [
                    "paper"
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  },
  "from": 0,
  "size": 2
}
{
	"track_total_hits": true,
	"query": {
		"bool": {
		  //  "minimum_should_match": 1,
			"must": [
				{
					"range": {
						"created": {
							"gte": "2022/01/01 00:00:00 +08:00",
							"lte": "2022/11/15 23:59:59 +08:00"
						}
					}
				},
				{
				    "term": {
				        "user.screen_name": "FIFA世界杯"
				    }
				}
			],
			"must_not": [
                {
                  "exists": {
                    "field": "user.id"
                  }
                }
              ],
			"should": [
			    
				{
				    "term": {
				        "user.biz": "6436872484"
				    }
				},
				{
				    "term": {
				        "user.id": "6436872484"
				    }
				}
			]
		}
	},
	"from": 0,
	"size": 10,
	"sort": {},
	"_source": []
}
*/
/** 字段存在
 * {
	"track_total_hits": true,
	"query": {
		"bool": {
			"must": [
				{
					"exists": {
						"field": "doc_mentions"
					}
				}
			],
			"must_not": [
				{
					"exists": {
						"field": "doc_subject"
					}
				}
			],
			"should": []
		}
	},
	"from": 0,
	"size": 1
}
 */
/** 同时包含
 * {
	"track_total_hits": true,
	"query": {
		"bool": {
			"must": [
				{
					"match": {
						"mark_paths": "value1"
					}
				},
				{
					"match": {
						"mark_paths": "value2"
					}
				}
			],
			"must_not": [],
			"should": []
		}
	},
	"from": 0,
	"size": 1
}
 */