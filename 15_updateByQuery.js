// /guyu-comment-1/_update_by_query
// {
//   "track_total_hits": true,
//   "query": {
//     "bool": {
//       "must": [
//         {
//           "term": {
//             "_id": "7403354652839936805_2024-12-18"
//           }
//         }
//       ],
//       "must_not": [],
//       "should": []
//     }
//   },
//   "script": {
//     "source": "for(int j=0;j<params.keys.length;j++){ctx._source[params.keys[j]]=params.data[params.keys[j]]}",
//     "params": {
//       "keys": [
//         "link_type"
//       ],
//       "data": {
//         "link_type": "求推荐"
//       }
//     }
//   }
// }

// {
//   "script": {
//     "source": "ctx._source.remove('star_num')",
//     "lang": "painless"
//   },
//   "query": {
//     "bool": {
//       "must": [
//         {
//           "terms": {
//             "ec_platform": [
//               "EBAY"
//             ]
//           }
//         },
//         {
//           "exists": {
//             "field": "star_num"
//           }
//         },
//         {
//           "term": {
//             "status": "有效"
//           }
//         }
//       ],
//       "must_not": [],
//       "should": []
//     }
//   }
// }
