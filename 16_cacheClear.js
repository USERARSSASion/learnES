/**
POST
/_cache/clear?fielddata=true
{}
 */

// 
// /_cluster/reroute?retry_failed=true
// 

// 删除副本
// PUT index_name/_settings
// {
//   "settings": {
//     "number_of_replicas": 0
//   }
// }