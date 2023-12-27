GET /paragraphs-*/_search

{
  "query": {
      "exists": {
          "field": "music"
      }
  },
  "size": 5,
  "_source": []
}
