POST /paragraphs-*/_search

{
	"query": {
		"bool": {
			"must": [{
				"term": {
					"_id": "a5e30a0a227e11ed90bce4434ba31686"
				}
			}],
			"must_not": [],
			"should": []
		}
	},
	"from": 0,
	"size": 13,
	"sort": {}
}
