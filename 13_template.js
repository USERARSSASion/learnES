// /_index_template/project-comment

// {
//   "index_patterns": [
//     "project-comment-*"
//   ],
//   "template": {
//     "settings": {
//       "index": {
//         "routing": {
//           "allocation": {
//             "total_shards_per_node": "3"
//           }
//         },
//         "refresh_interval": "30s",
//         "number_of_shards": "6",
//         "translog": {
//           "flush_threshold_size": "1g",
//           "sync_interval": "60s",
//           "durability": "async"
//         },
//         "merge": {
//           "scheduler": {
//             "max_thread_count": "16"
//           }
//         },
//         "query": {
//           "default_field": [
//             "body",
//             "title"
//           ]
//         },
//         "max_result_window": "100000",
//         "store": {
//           "type": "niofs"
//         },
//         "analysis": {
//           "analyzer": {
//             "hanlp_index2": {
//               "filter": [
//                 "lowercase"
//               ],
//               "type": "custom",
//               "tokenizer": "hanlp_index"
//             },
//             "path-analyzer": {
//               "tokenizer": "path-tokenizer"
//             }
//           },
//           "tokenizer": {
//             "path-tokenizer": {
//               "skip": "0",
//               "type": "path_hierarchy",
//               "replacement": "/",
//               "delimiter": "/"
//             }
//           }
//         },
//         "number_of_replicas": "0",
//         "warmer": {
//           "enabled": "false"
//         }
//       }
//     },
//     "mappings": {
//       "dynamic_date_formats": [
//         "yyyy/MM/dd HH:mm:ss z"
//       ],
//       "_source": {
//         "enabled": true
//       },
//       "dynamic_templates": [
//         {
//           "path_fields": {
//             "mapping": {
//               "fielddata": true,
//               "analyzer": "path-analyzer"
//             },
//             "match_mapping_type": "string",
//             "match": "*_paths"
//           }
//         },
//         {
//           "title_fields": {
//             "mapping": {
//               "analyzer": "hanlp_index2",
//               "type": "text",
//               "fields": {
//                 "raw": {
//                   "type": "keyword"
//                 }
//               }
//             },
//             "match": "title"
//           }
//         },
//         {
//           "media_fields": {
//             "mapping": {
//               "type": "keyword",
//               "fields": {
//                 "word": {
//                   "analyzer": "hanlp_index2",
//                   "type": "text"
//                 }
//               }
//             },
//             "match": "media"
//           }
//         },
//         {
//           "token_fields": {
//             "mapping": {
//               "fielddata": true,
//               "analyzer": "whitespace"
//             },
//             "match_mapping_type": "string",
//             "match": "*_tokens"
//           }
//         },
//         {
//           "text_fields": {
//             "match_pattern": "regex",
//             "mapping": {
//               "fielddata": true,
//               "analyzer": "hanlp_index2",
//               "type": "text"
//             },
//             "match": "^((pre_|sub_)?title|text|body)$"
//           }
//         },
//         {
//           "longs_as_strings": {
//             "match_pattern": "regex",
//             "unmatch": "(^.*_text$)|(media_rank)|(pa_media_rank)",
//             "mapping": {
//               "type": "long"
//             },
//             "match_mapping_type": "string",
//             "match": "^.*(_num|_count|rank|rate)$"
//           }
//         },
//         {
//           "float_as_long": {
//             "match_pattern": "regex",
//             "mapping": {
//               "type": "float"
//             },
//             "match_mapping_type": "long",
//             "match": "(index_of_media|keywords_score)"
//           }
//         },
//         {
//           "string_fields": {
//             "mapping": {
//               "type": "keyword"
//             },
//             "match_mapping_type": "string",
//             "match": "*"
//           }
//         },
//         {
//           "entities_fields": {
//             "mapping": {
//               "type": "nested"
//             },
//             "match": "^.*(_infos)$"
//           }
//         }
//       ],
//       "properties": {
//         "author_id": {
//           "type": "keyword"
//         }
//       }
//     }
//   }
// }

// /_template/project-comment
// {
//   "index_patterns": [
//     "project-comment-*"
//   ],
//     "settings": {
//       "index": {
//         "routing": {
//           "allocation": {
//             "total_shards_per_node": "3"
//           }
//         },
//         "refresh_interval": "30s",
//         "number_of_shards": "6",
//         "translog": {
//           "flush_threshold_size": "1g",
//           "sync_interval": "60s",
//           "durability": "async"
//         },
//         "merge": {
//           "scheduler": {
//             "max_thread_count": "16"
//           }
//         },
//         "query": {
//           "default_field": [
//             "body",
//             "title"
//           ]
//         },
//         "max_result_window": "100000",
//         "store": {
//           "type": "niofs"
//         },
//         "analysis": {
//           "analyzer": {
//             "hanlp_index2": {
//               "filter": [
//                 "lowercase"
//               ],
//               "type": "custom",
//               "tokenizer": "hanlp_index"
//             },
//             "path-analyzer": {
//               "tokenizer": "path-tokenizer"
//             }
//           },
//           "tokenizer": {
//             "path-tokenizer": {
//               "skip": "0",
//               "type": "path_hierarchy",
//               "replacement": "/",
//               "delimiter": "/"
//             }
//           }
//         },
//         "number_of_replicas": "0",
//         "warmer": {
//           "enabled": "false"
//         }
//       }
//     },
//     "mappings": {
//       "dynamic_date_formats": [
//         "yyyy/MM/dd HH:mm:ss z"
//       ],
//       "_source": {
//         "enabled": true
//       },
//       "dynamic_templates": [
//         {
//           "path_fields": {
//             "mapping": {
//               "fielddata": true,
//               "analyzer": "path-analyzer"
//             },
//             "match_mapping_type": "string",
//             "match": "*_paths"
//           }
//         },
//         {
//           "title_fields": {
//             "mapping": {
//               "analyzer": "hanlp_index2",
//               "type": "text",
//               "fields": {
//                 "raw": {
//                   "type": "keyword"
//                 }
//               }
//             },
//             "match": "title"
//           }
//         },
//         {
//           "media_fields": {
//             "mapping": {
//               "type": "keyword",
//               "fields": {
//                 "word": {
//                   "analyzer": "hanlp_index2",
//                   "type": "text"
//                 }
//               }
//             },
//             "match": "media"
//           }
//         },
//         {
//           "token_fields": {
//             "mapping": {
//               "fielddata": true,
//               "analyzer": "whitespace"
//             },
//             "match_mapping_type": "string",
//             "match": "*_tokens"
//           }
//         },
//         {
//           "text_fields": {
//             "match_pattern": "regex",
//             "mapping": {
//               "fielddata": true,
//               "analyzer": "hanlp_index2",
//               "type": "text"
//             },
//             "match": "^((pre_|sub_)?title|text|body)$"
//           }
//         },
//         {
//           "longs_as_strings": {
//             "match_pattern": "regex",
//             "unmatch": "(^.*_text$)|(media_rank)|(pa_media_rank)",
//             "mapping": {
//               "type": "long"
//             },
//             "match_mapping_type": "string",
//             "match": "^.*(_num|_count|rank|rate)$"
//           }
//         },
//         {
//           "float_as_long": {
//             "match_pattern": "regex",
//             "mapping": {
//               "type": "float"
//             },
//             "match_mapping_type": "long",
//             "match": "(index_of_media|keywords_score)"
//           }
//         },
//         {
//           "string_fields": {
//             "mapping": {
//               "type": "keyword"
//             },
//             "match_mapping_type": "string",
//             "match": "*"
//           }
//         },
//         {
//           "entities_fields": {
//             "mapping": {
//               "type": "nested"
//             },
//             "match": "^.*(_infos)$"
//           }
//         }
//       ],
//       "properties": {
//         "author_id": {
//           "type": "keyword"
//         }
//       }
//     }
// }