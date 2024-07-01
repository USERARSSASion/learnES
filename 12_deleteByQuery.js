/**
/ecoflow-nps-test/_delete_by_query
{
  "query": {
    "bool": {
      "must": [
         {
          "terms": {
            "channel": ["CRM退换维", "CRM仅会话"]
          }
        }
      ],
      "should": []
    }
  }
}
 */