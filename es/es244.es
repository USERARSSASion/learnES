GET /paragraphs-*/_search

{
	"track_total_hits": true,
	"query": {
		"bool": {
			"must": [{
				"nested": {
					"path": "projects",
					"query": {
						"bool": {
							"must": [{
								"match": {
									"projects.project_id": "cjsc.project1"
								}
							}, {
								"match": {
									"projects.deleted": "NO"
								}
							}, {
								"prefix": {
									"projects.topic_paths": "/长江证券/负面新闻"
								}
							}],
							"must_not": []
						}
					}
				}
			}, {
				"terms": {
					"media_type": ["web", "microblog", "paper", "wechat", "app", "video", "qa", "bbs", "short"]
				}
			}, {
				"range": {
					"created": {
						"from": "2022/06/01 00:00:00 +08:00",
						"to": "2022/06/01 23:59:59 +08:00"
					}
				}
			}],
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
	"_source": ["id"],
	"aggs": {
		"word_cloud": {
			"terms": {
				"field": "title_tokens",
				"size": 100
			}
		}
	}
}