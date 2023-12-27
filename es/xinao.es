POST /paragraphs-*/_search

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
									"projects.project_id": "enn.project1"
								}
							},  {
								"prefix": {
									"projects.topic_paths": "/新奥"
								}
							}],
							"must_not": []
						}
					}
				}
			}],
			"must_not": [],
			"should": []
		}
	},
	"from": 0,
	"size": 100,
	"sort": {
		"created": {
			"order": "asc"
		}
	}
}
