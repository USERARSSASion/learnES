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
								"terms": {
									"projects.tendency": ["负面"]
								}
							}, {
								"match": {
									"projects.deleted": "NO"
								}
							}, {
								"prefix": {
									"projects.topic_paths": "/长江证券"
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
						"from": "2022/06/24 00:00:00 +08:00",
						"to": "2022/07/01 23:59:59 +08:00"
					}
				}
			}],
			"must_not": [],
			"should": []
		}
	},
	"from": 0,
	"size": 10,
	"sort": {
		"created": {
			"order": "asc"
		}
	},
	"_source": [],
	"aggs": {
		"hot_articles": {
			"terms": {
				"field": "rel",
				"size": 10
			},
			"aggs": {
				"hits": {
					"top_hits": {
						"sort": [{
							"created": {
								"order": "asc"
							}
						}],
						"_source": {
							"includes": ["title", "media", "media_type", "channel", "body", "created", "uri", "imgs", "rel", "rank", "projects.tag_paths", "emtl_tendency", "projects.tendency"]
						},
						"size": 1
					}
				}
			}
		}
	}
}
