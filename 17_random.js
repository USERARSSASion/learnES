// {
//   "track_total_hits": false,
//   "query": {
//     "function_score": {
//       "query": {
//         "bool": {
//           "must": [
//             {
//               "range": {
//                 "created": {
//                   "from": "2024/01/01 00:00:00 +08:00",
//                   "to": "2025/02/28 23:59:59 +08:00"
//                 }
//               }
//             },
//             {
//               "term": {
//                 "status": "有效"
//               }
//             },
//             {
//               "terms": {
//                 "media": [
//                   "FACEBOOK",
//                   "REDDIE",
//                   "YOUTUBE"
//                 ]
//               }
//             },
//             {
//               "term": {
//                 "doc_type": "POST"
//               }
//             },
//             {
//               "exists": {
//                 "field": "topic_paths"
//               }
//             }
//           ],
//           "must_not": [],
//           "should": []
//         }
//       },
//       "random_score": {
//         "seed": "{{_seq_no}}"
//       }
//     }
//   },
//   "from": 0,
//   "size": 10000,
//   "aggs": {},
//   "_source": []
// }