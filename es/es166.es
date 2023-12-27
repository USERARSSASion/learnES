GET /classified-202212-*,classified-202211-*/_search

{
	"track_total_hits": true,
	"query": {
		"bool": {
			"must": [
				{
					"range": {
						"created": {
							"gte": "2022/11/21 00:00:00 +08:00",
							"lte": "2022/11/30 23:59:59 +08:00"
						}
					}
				},
        {
          "terms": {
            "category_paths": [
              "新闻/国内", "新闻/科技", "新闻/健康", "新闻/财经"
            ]
          }
        }
			],
			"must_not": [],
			"should": []
		}
	},
	"from": 0,
	"size": 1,
	"sort": {},
	"_source": []
}