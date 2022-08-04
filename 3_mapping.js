const { elasticClient } = require('./es');

const projectElasticConfig = {
  index: 'test-entities-202207',
};

async function run() {
  // 获取所有的 mapping
  const result = await elasticClient.indices.getMapping({
    ...projectElasticConfig
  })
  // 获取某一个字段的 mapping
  // const result = await elasticClient.indices.getFieldMapping({
  //   ...projectElasticConfig,
  //   fields: 'mark_info_paths'
  // })
  console.log(result.body);
}

run();

/**
{
	"mappings": {
		"dynamic_date_formats": ["yyyy/MM/dd HH:mm:ss z"],
		"dynamic_templates": [{
			"path_fields": {
				"match": "*_paths",
				"match_mapping_type": "string",
				"mapping": {
					"analyzer": "path-analyzer",
					"fielddata": true,
					"search_analyzer": "path-analyzer"
				}
			}
		}, {
			"token_fields": {
				"match": "*_tokens",
				"match_mapping_type": "string",
				"mapping": {
					"analyzer": "whitespace",
					"fielddata": true
				}
			}
		}, {
			"entities_fields": {
				"match": "*entities",
				"mapping": {
					"type": "nested"
				}
			}
		}, {
			"risks_fields": {
				"match": "*risks",
				"mapping": {
					"type": "nested"
				}
			}
		}, {
			"managers_fields": {
				"match": "*managers",
				"mapping": {
					"type": "nested"
				}
			}
		}, {
			"nest_fields": {
				"match": "*_nest",
				"mapping": {
					"type": "nested"
				}
			}
		}, {
			"integers": {
				"match": "[*_num, *_count]",
				"match_mapping_type": "long",
				"mapping": {
					"type": "integer"
				}
			}
		}, {
			"string_fields": {
				"match": "*",
				"match_mapping_type": "string",
				"mapping": {
					"type": "keyword"
				}
			}
		}],
		"properties": {
			"account_type": {
				"type": "keyword"
			},
			"action": {
				"type": "keyword"
			},
			"affect_level": {
				"type": "long"
			},
			"affect_value": {
				"type": "long"
			},
			"alexa_pv": {
				"type": "long"
			},
			"alexa_uv": {
				"type": "long"
			},
			"alias": {
				"type": "keyword"
			},
			"art_status": {
				"type": "keyword"
			},
			"art_uniqueId": {
				"type": "keyword"
			},
			"author": {
				"type": "keyword"
			},
			"author_id": {
				"type": "keyword"
			},
			"biz": {
				"type": "keyword"
			},
			"body": {
				"type": "text",
				"analyzer": "hanlp_index"
			},
			"body2": {
				"properties": {
					"matches": {
						"type": "boolean"
					}
				}
			},
			"caption": {
				"properties": {
					"text": {
						"type": "keyword"
					}
				}
			},
			"car_model": {
				"properties": {
					"brand": {
						"type": "keyword"
					},
					"country": {
						"type": "keyword"
					},
					"displacement": {
						"type": "keyword"
					},
					"drive": {
						"type": "keyword"
					},
					"energy": {
						"type": "keyword"
					},
					"gearbox": {
						"type": "keyword"
					},
					"hprice": {
						"type": "long"
					},
					"level": {
						"type": "keyword"
					},
					"lprice": {
						"type": "long"
					},
					"mfc": {
						"type": "keyword"
					},
					"mid": {
						"type": "keyword"
					},
					"mode_production": {
						"type": "keyword"
					},
					"model": {
						"type": "keyword"
					},
					"structure": {
						"type": "keyword"
					}
				}
			},
			"cate1": {
				"type": "keyword"
			},
			"cate2": {
				"type": "keyword"
			},
			"cate3": {
				"type": "keyword"
			},
			"category": {
				"type": "keyword"
			},
			"category_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"channel": {
				"type": "keyword"
			},
			"charset": {
				"type": "keyword"
			},
			"circulation": {
				"type": "keyword"
			},
			"city": {
				"type": "keyword"
			},
			"collect_num": {
				"type": "long"
			},
			"comment": {
				"type": "keyword"
			},
			"comment_num": {
				"type": "long"
			},
			"comment_rule": {
				"type": "keyword"
			},
			"comments_count": {
				"type": "long"
			},
			"content_gov_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"content_protected": {
				"type": "keyword"
			},
			"content_region_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"content_risks": {
				"type": "nested",
				"properties": {
					"count": {
						"type": "long"
					},
					"keywords": {
						"type": "keyword"
					},
					"risk_level": {
						"type": "long"
					},
					"risk_paths": {
						"type": "text",
						"analyzer": "path-analyzer",
						"fielddata": true
					}
				}
			},
			"core_content_risk_kw_count": {
				"type": "long"
			},
			"core_content_risk_kws": {
				"type": "keyword"
			},
			"core_content_risk_level": {
				"type": "long"
			},
			"countrycode": {
				"type": "keyword"
			},
			"countryname": {
				"type": "keyword"
			},
			"cover_img": {
				"type": "keyword"
			},
			"crawler": {
				"type": "keyword"
			},
			"created": {
				"type": "date",
				"format": "yyyy/MM/dd HH:mm:ss z"
			},
			"deleted": {
				"type": "keyword"
			},
			"distribute_conditions": {
				"type": "keyword"
			},
			"doc_mentions": {
				"type": "keyword",
				"fields": {
					"term": {
						"type": "text",
						"analyzer": "hanlp_index",
						"search_analyzer": "hanlp_standard"
					},
					"word": {
						"type": "text",
						"analyzer": "hanlp_index"
					}
				}
			},
			"doc_score": {
				"type": "long"
			},
			"doc_subject": {
				"type": "keyword",
				"fields": {
					"term": {
						"type": "text",
						"analyzer": "hanlp_index",
						"search_analyzer": "hanlp_standard"
					},
					"word": {
						"type": "text",
						"analyzer": "hanlp_index"
					}
				}
			},
			"doc_subject_basis": {
				"type": "keyword"
			},
			"doc_subject_tokens": {
				"type": "text",
				"analyzer": "whitespace",
				"fielddata": true
			},
			"domain": {
				"type": "keyword"
			},
			"duration": {
				"type": "keyword"
			},
			"edited_at": {
				"type": "date",
				"format": "yyyy/MM/dd HH:mm:ss z"
			},
			"emtl_tendency": {
				"type": "keyword"
			},
			"engagement_num": {
				"type": "long"
			},
			"ent_code": {
				"type": "keyword"
			},
			"ent_name": {
				"type": "keyword"
			},
			"ent_research_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"entities": {
				"type": "nested",
				"properties": {
					"basis": {
						"type": "keyword"
					},
					"from": {
						"type": "keyword"
					},
					"full_name": {
						"type": "keyword"
					},
					"id": {
						"type": "keyword"
					},
					"keywords": {
						"type": "keyword"
					},
					"l1": {
						"type": "keyword"
					},
					"l2": {
						"type": "keyword"
					},
					"level": {
						"type": "long"
					},
					"name": {
						"type": "keyword"
					},
					"voter": {
						"type": "keyword"
					},
					"votes_score": {
						"type": "float"
					}
				}
			},
			"equalgroup": {
				"type": "keyword"
			},
			"feiwen_remark_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"fengsheng_rank": {
				"type": "long"
			},
			"first_source": {
				"properties": {
					"id": {
						"type": "long"
					},
					"name": {
						"type": "keyword"
					},
					"sitename": {
						"type": "keyword"
					},
					"siteurl": {
						"type": "keyword"
					},
					"url": {
						"type": "keyword"
					}
				}
			},
			"guess_created": {
				"type": "keyword"
			},
			"hash_tag": {
				"type": "keyword"
			},
			"header": {
				"properties": {
					"matches": {
						"type": "boolean"
					},
					"text": {
						"type": "keyword"
					}
				}
			},
			"headline": {
				"type": "keyword"
			},
			"hidden": {
				"type": "keyword"
			},
			"html_hash": {
				"type": "keyword"
			},
			"html_simhash": {
				"type": "keyword"
			},
			"icp_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"id": {
				"type": "keyword"
			},
			"id_article": {
				"type": "keyword"
			},
			"id_delivery": {
				"type": "keyword"
			},
			"id_site": {
				"type": "keyword"
			},
			"idx": {
				"type": "keyword"
			},
			"imgs": {
				"type": "keyword"
			},
			"industries_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"industry_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"internal_search_reply": {
				"properties": {
					"id_article": {
						"type": "long"
					},
					"id_site": {
						"type": "long"
					},
					"text": {
						"type": "keyword"
					}
				}
			},
			"ip_country": {
				"type": "keyword"
			},
			"ip_province": {
				"type": "keyword"
			},
			"irrelevant_num": {
				"type": "long"
			},
			"is_cover": {
				"type": "keyword"
			},
			"keywords": {
				"type": "keyword"
			},
			"language": {
				"properties": {
					"encoding": {
						"type": "keyword"
					},
					"text": {
						"type": "keyword"
					}
				}
			},
			"like_count": {
				"type": "long"
			},
			"like_num": {
				"type": "long"
			},
			"local_rcf822_time": {
				"properties": {
					"text": {
						"type": "keyword"
					}
				}
			},
			"local_time": {
				"properties": {
					"GMT": {
						"type": "long"
					},
					"text": {
						"type": "keyword"
					}
				}
			},
			"managers_entities": {
				"type": "nested",
				"properties": {
					"basis": {
						"type": "keyword"
					},
					"company_full_name": {
						"type": "keyword"
					},
					"company_id": {
						"type": "keyword"
					},
					"company_level": {
						"type": "long"
					},
					"company_name": {
						"type": "keyword"
					},
					"l1": {
						"type": "keyword"
					},
					"l2": {
						"type": "keyword"
					},
					"name": {
						"type": "keyword"
					},
					"title": {
						"type": "keyword"
					},
					"voter": {
						"type": "keyword"
					},
					"votes_score": {
						"type": "float"
					}
				}
			},
			"mark": {
				"type": "keyword"
			},
			"mark_info_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"mark_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"media": {
				"type": "keyword",
				"fields": {
					"word": {
						"type": "text",
						"analyzer": "hanlp_index"
					}
				}
			},
			"media_category": {
				"type": "keyword"
			},
			"media_hao": {
				"type": "keyword"
			},
			"media_industry_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"media_info_affect_weight": {
				"type": "long"
			},
			"media_info_level": {
				"type": "long"
			},
			"media_info_level_name": {
				"type": "keyword"
			},
			"media_info_name": {
				"type": "keyword"
			},
			"media_info_risk_level": {
				"type": "long"
			},
			"media_info_spread_depth_weight": {
				"type": "long"
			},
			"media_level": {
				"type": "keyword"
			},
			"media_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"media_platform": {
				"type": "keyword"
			},
			"media_rank": {
				"type": "keyword"
			},
			"media_risks": {
				"type": "nested",
				"properties": {
					"count": {
						"type": "long"
					},
					"risk_level": {
						"type": "long"
					},
					"risk_paths": {
						"type": "text",
						"analyzer": "path-analyzer",
						"fielddata": true
					}
				}
			},
			"media_subject": {
				"type": "keyword"
			},
			"media_tag": {
				"type": "keyword"
			},
			"media_type": {
				"type": "keyword"
			},
			"mediatype": {
				"properties": {
					"clip": {
						"type": "boolean"
					},
					"fulltext": {
						"type": "boolean"
					},
					"haslogo": {
						"type": "boolean"
					},
					"hastext": {
						"type": "boolean"
					},
					"paywall": {
						"type": "boolean"
					},
					"text": {
						"type": "keyword"
					},
					"timemap": {
						"type": "boolean"
					}
				}
			},
			"mid": {
				"type": "keyword"
			},
			"modified": {
				"type": "date",
				"format": "yyyy/MM/dd HH:mm:ss z"
			},
			"music": {
				"type": "keyword"
			},
			"negative_words": {
				"properties": {
					"freq": {
						"type": "long"
					},
					"score": {
						"type": "long"
					},
					"word": {
						"type": "keyword"
					}
				}
			},
			"opinion": {
				"type": "keyword"
			},
			"orig_url": {
				"type": "keyword"
			},
			"pos_score": {
				"type": "long"
			},
			"position": {
				"type": "keyword"
			},
			"priority": {
				"type": "keyword"
			},
			"project_id": {
				"type": "keyword"
			},
			"projects": {
				"type": "nested"
			},
			"province": {
				"type": "keyword"
			},
			"pub_site": {
				"type": "keyword"
			},
			"pub_source": {
				"type": "keyword"
			},
			"rank": {
				"type": "long"
			},
			"raw_title": {
				"type": "keyword"
			},
			"read": {
				"type": "keyword"
			},
			"read_num": {
				"type": "long"
			},
			"ref_id": {
				"type": "keyword"
			},
			"region_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"rel": {
				"type": "keyword"
			},
			"rel2": {
				"type": "keyword"
			},
			"rel_level": {
				"type": "long"
			},
			"relation_risks": {
				"type": "nested",
				"properties": {
					"count": {
						"type": "long"
					},
					"risk_level": {
						"type": "long"
					},
					"risk_paths": {
						"type": "text",
						"analyzer": "path-analyzer",
						"fielddata": true
					}
				}
			},
			"relevant_num": {
				"type": "long"
			},
			"relevant_words": {
				"type": "keyword"
			},
			"report_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"repost_num": {
				"type": "long"
			},
			"retweeted_status": {
				"properties": {
					"text": {
						"type": "text",
						"analyzer": "hanlp_index",
						"search_analyzer": "hanlp_standard"
					}
				}
			},
			"risk_level": {
				"type": "long"
			},
			"risk_words": {
				"type": "keyword"
			},
			"share_count": {
				"type": "long"
			},
			"share_num": {
				"type": "long"
			},
			"shortlink": {
				"type": "keyword"
			},
			"source_type": {
				"type": "keyword"
			},
			"spread_power": {
				"type": "long"
			},
			"src": {
				"type": "keyword"
			},
			"start_time": {
				"type": "date",
				"format": "yyyy/MM/dd HH:mm:ss z"
			},
			"stimestamp": {
				"type": "keyword"
			},
			"stimestamp_index": {
				"type": "keyword"
			},
			"stock_code": {
				"type": "keyword"
			},
			"stock_market_paths": {
				"type": "text",
				"analyzer": "path-analyzer",
				"fielddata": true
			},
			"stock_name": {
				"type": "keyword"
			},
			"summary": {
				"type": "keyword"
			},
			"summary2": {
				"properties": {
					"matches": {
						"type": "boolean"
					},
					"text": {
						"type": "keyword"
					}
				}
			},
			"ted_score": {
				"type": "long"
			},
			"tendency": {
				"type": "keyword"
			},
			"text": {
				"type": "text",
				"analyzer": "hanlp_index"
			},
			"ticks": {
				"type": "long"
			},
			"time_exposed": {
				"type": "date",
				"format": "yyyy/MM/dd HH:mm:ss z"
			},
			"time_grabbed": {
				"type": "date",
				"format": "yyyy/MM/dd HH:mm:ss z"
			},
			"time_indexed": {
				"type": "date",
				"format": "yyyy/MM/dd HH:mm:ss z"
			},
			"time_percolated": {
				"type": "date",
				"format": "yyyy/MM/dd HH:mm:ss z"
			},
			"time_queued": {
				"type": "date",
				"format": "yyyy/MM/dd HH:mm:ss z"
			},
			"title": {
				"type": "text",
				"fields": {
					"raw": {
						"type": "keyword"
					},
					"term": {
						"type": "text",
						"analyzer": "hanlp_index",
						"search_analyzer": "hanlp_standard",
						"fielddata": true
					}
				},
				"analyzer": "hanlp_index"
			},
			"title_tokens": {
				"type": "text",
				"analyzer": "whitespace",
				"fielddata": true
			},
			"topic_count": {
				"type": "long"
			},
			"topics": {
				"properties": {
					"id": {
						"type": "long"
					},
					"linktype_max": {
						"type": "long"
					},
					"linktype_now": {
						"type": "long"
					},
					"metacat": {
						"type": "long"
					},
					"metacat_level": {
						"type": "long"
					},
					"text": {
						"type": "keyword"
					}
				}
			},
			"unix_timestamp": {
				"type": "keyword"
			},
			"updated": {
				"type": "date",
				"format": "yyyy/MM/dd HH:mm:ss z"
			},
			"uri": {
				"type": "keyword"
			},
			"url_common": {
				"type": "keyword"
			},
			"use_proxy": {
				"type": "keyword"
			},
			"user": {
				"properties": {
					"avatar_large": {
						"type": "keyword"
					},
					"biz": {
						"type": "keyword"
					},
					"city": {
						"type": "keyword"
					},
					"desc": {
						"type": "keyword"
					},
					"description": {
						"type": "keyword"
					},
					"doc_count": {
						"type": "long"
					},
					"follower_num": {
						"type": "long"
					},
					"followers_count": {
						"type": "long"
					},
					"gender": {
						"type": "keyword"
					},
					"id_str": {
						"type": "keyword"
					},
					"location": {
						"type": "keyword"
					},
					"name": {
						"type": "keyword"
					},
					"portait": {
						"type": "keyword"
					},
					"portrait": {
						"type": "keyword"
					},
					"profile_image_url": {
						"type": "keyword"
					},
					"province": {
						"type": "keyword"
					},
					"red_id": {
						"type": "keyword"
					},
					"screen_name": {
						"type": "keyword"
					},
					"short_id": {
						"type": "keyword"
					},
					"statuses_count": {
						"type": "long"
					},
					"total_like_count": {
						"type": "long"
					},
					"unique_id": {
						"type": "keyword"
					},
					"uri": {
						"type": "keyword"
					},
					"url": {
						"type": "keyword"
					},
					"user_name": {
						"type": "keyword"
					},
					"v_name": {
						"type": "keyword"
					},
					"verified": {
						"type": "boolean"
					},
					"verified_type": {
						"type": "long"
					},
					"verified_user_type": {
						"type": "keyword"
					},
					"wechat_id": {
						"type": "keyword"
					}
				}
			},
			"vertical": {
				"type": "keyword"
			},
			"videos": {
				"type": "keyword"
			},
			"wechat_id": {
				"type": "keyword"
			},
			"word_count": {
				"type": "long"
			},
			"yinbaojian_risks": {
				"type": "nested",
				"properties": {
					"count": {
						"type": "long"
					},
					"keywords": {
						"type": "keyword"
					},
					"risk_level": {
						"type": "long"
					},
					"risk_paths": {
						"type": "text",
						"analyzer": "path-analyzer",
						"fielddata": true
					}
				}
			}
		}
	}
}
 */

/**
 
{
	"entities-202206": {
		"aliases": {},
		"mappings": {
			"dynamic_date_formats": [
				"yyyy/MM/dd HH:mm:ss z"
			],
			"dynamic_templates": [
				{
					"path_fields": {
						"match": "*_paths",
						"match_mapping_type": "string",
						"mapping": {
							"analyzer": "path-analyzer",
							"fielddata": true,
							"search_analyzer": "path-analyzer"
						}
					}
				},
				{
					"token_fields": {
						"match": "*_tokens",
						"match_mapping_type": "string",
						"mapping": {
							"analyzer": "whitespace",
							"fielddata": true
						}
					}
				},
				{
					"entities_fields": {
						"match": "*entities",
						"mapping": {
							"type": "nested"
						}
					}
				},
				{
					"risks_fields": {
						"match": "*risks",
						"mapping": {
							"type": "nested"
						}
					}
				},
				{
					"managers_fields": {
						"match": "*managers",
						"mapping": {
							"type": "nested"
						}
					}
				},
				{
					"nest_fields": {
						"match": "*_nest",
						"mapping": {
							"type": "nested"
						}
					}
				},
				{
					"integers": {
						"match": "[*_num, *_count]",
						"match_mapping_type": "long",
						"mapping": {
							"type": "integer"
						}
					}
				},
				{
					"string_fields": {
						"match": "*",
						"match_mapping_type": "string",
						"mapping": {
							"type": "keyword"
						}
					}
				}
			],
			"properties": {
				"account_id": {
					"type": "keyword"
				},
				"account_name": {
					"type": "keyword"
				},
				"account_type": {
					"type": "keyword"
				},
				"ad_price": {
					"type": "keyword"
				},
				"ad_worth": {
					"type": "keyword"
				},
				"affect_level": {
					"type": "long"
				},
				"affect_value": {
					"type": "long"
				},
				"aggs": {
					"type": "object"
				},
				"alexa_pv": {
					"type": "long"
				},
				"alexa_uv": {
					"type": "long"
				},
				"alias": {
					"type": "keyword"
				},
				"art_status": {
					"type": "keyword"
				},
				"art_uniqueId": {
					"type": "keyword"
				},
				"author": {
					"type": "keyword"
				},
				"author_id": {
					"type": "keyword"
				},
				"author_info": {
					"properties": {
						"author_level": {
							"type": "long"
						},
						"city": {
							"type": "keyword"
						},
						"name": {
							"type": "keyword"
						},
						"post": {
							"type": "keyword"
						},
						"province": {
							"type": "keyword"
						}
					}
				},
				"biz": {
					"type": "keyword"
				},
				"body": {
					"type": "text",
					"analyzer": "hanlp_index"
				},
				"body2": {
					"properties": {
						"matches": {
							"type": "boolean"
						}
					}
				},
				"brand": {
					"type": "keyword"
				},
				"brand_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"brands": {
					"type": "keyword"
				},
				"caption": {
					"properties": {
						"text": {
							"type": "keyword"
						}
					}
				},
				"car_model": {
					"properties": {
						"brand": {
							"type": "keyword"
						},
						"country": {
							"type": "keyword"
						},
						"displacement": {
							"type": "keyword"
						},
						"drive": {
							"type": "keyword"
						},
						"energy": {
							"type": "keyword"
						},
						"gearbox": {
							"type": "keyword"
						},
						"hprice": {
							"type": "long"
						},
						"level": {
							"type": "keyword"
						},
						"lprice": {
							"type": "long"
						},
						"mfc": {
							"type": "keyword"
						},
						"mid": {
							"type": "keyword"
						},
						"mode_production": {
							"type": "keyword"
						},
						"model": {
							"type": "keyword"
						},
						"structure": {
							"type": "keyword"
						}
					}
				},
				"card_type": {
					"type": "keyword"
				},
				"cate1": {
					"type": "keyword"
				},
				"cate2": {
					"type": "keyword"
				},
				"cate3": {
					"type": "keyword"
				},
				"category": {
					"type": "keyword"
				},
				"category_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"channel": {
					"type": "keyword"
				},
				"charset": {
					"type": "keyword"
				},
				"chief": {
					"type": "keyword"
				},
				"chinacom_sensitive": {
					"type": "keyword"
				},
				"circulation": {
					"type": "keyword"
				},
				"city": {
					"type": "keyword"
				},
				"coin_num": {
					"type": "long"
				},
				"collect_num": {
					"type": "long"
				},
				"comment": {
					"type": "keyword"
				},
				"comment_infos": {
					"properties": {
						"sentenceIndex": {
							"type": "long"
						},
						"value": {
							"properties": {
								"score": {
									"type": "long"
								},
								"weight": {
									"type": "long"
								},
								"words": {
									"type": "keyword"
								}
							}
						},
						"viewport_depth": {
							"type": "long"
						},
						"viewport_head": {
							"type": "keyword"
						},
						"viewport_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						},
						"viewport_tail": {
							"type": "keyword"
						}
					}
				},
				"comment_num": {
					"type": "long"
				},
				"comment_rule": {
					"type": "keyword"
				},
				"comments_count": {
					"type": "long"
				},
				"comments_num": {
					"type": "long"
				},
				"cont_type": {
					"type": "keyword"
				},
				"content_gov_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"content_protected": {
					"type": "keyword"
				},
				"content_region_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"content_risks": {
					"type": "nested",
					"properties": {
						"count": {
							"type": "long"
						},
						"keywords": {
							"type": "keyword"
						},
						"risk_level": {
							"type": "keyword"
						},
						"risk_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						}
					}
				},
				"core_content_risk_kw_count": {
					"type": "long"
				},
				"core_content_risk_kws": {
					"type": "keyword"
				},
				"core_content_risk_level": {
					"type": "long"
				},
				"core_content_risk_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"country_code": {
					"type": "keyword"
				},
				"countrycode": {
					"type": "keyword"
				},
				"countryname": {
					"type": "keyword"
				},
				"county": {
					"type": "keyword"
				},
				"cover_img": {
					"type": "keyword"
				},
				"crawler": {
					"type": "keyword"
				},
				"created": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"danmu_num": {
					"type": "long"
				},
				"data_source": {
					"type": "keyword"
				},
				"deleted": {
					"type": "keyword"
				},
				"disableGzip": {
					"type": "keyword"
				},
				"distribute_conditions": {
					"type": "keyword"
				},
				"doc": {
					"properties": {
						"is_chief": {
							"type": "boolean"
						}
					}
				},
				"doc_count": {
					"type": "long"
				},
				"doc_mentions": {
					"type": "keyword",
					"fields": {
						"term": {
							"type": "text",
							"analyzer": "hanlp_index",
							"search_analyzer": "hanlp_standard"
						},
						"word": {
							"type": "text",
							"analyzer": "hanlp_index"
						}
					}
				},
				"doc_score": {
					"type": "long"
				},
				"doc_subject": {
					"type": "keyword",
					"fields": {
						"term": {
							"type": "text",
							"analyzer": "hanlp_index",
							"search_analyzer": "hanlp_standard"
						},
						"word": {
							"type": "text",
							"analyzer": "hanlp_index"
						}
					}
				},
				"doc_subject_basis": {
					"type": "keyword"
				},
				"doc_subject_tokens": {
					"type": "text",
					"analyzer": "whitespace",
					"fielddata": true
				},
				"doc_title": {
					"type": "keyword"
				},
				"domain": {
					"type": "keyword"
				},
				"duration": {
					"type": "long"
				},
				"edited_at": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"editor": {
					"type": "keyword"
				},
				"emtl_tendency": {
					"type": "keyword"
				},
				"enduring": {
					"type": "keyword"
				},
				"engagement_num": {
					"type": "long"
				},
				"ent_code": {
					"type": "keyword"
				},
				"ent_name": {
					"type": "keyword"
				},
				"ent_research_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"entities": {
					"type": "nested",
					"properties": {
						"basis": {
							"type": "keyword"
						},
						"entity_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						},
						"entity_type": {
							"type": "keyword"
						},
						"execs": {
							"properties": {
								"name": {
									"type": "keyword"
								},
								"title": {
									"type": "keyword"
								}
							}
						},
						"fields": {
							"type": "keyword"
						},
						"from": {
							"type": "keyword"
						},
						"full_name": {
							"type": "keyword"
						},
						"id": {
							"type": "keyword"
						},
						"keywords": {
							"type": "keyword"
						},
						"l1": {
							"type": "keyword"
						},
						"l2": {
							"type": "keyword"
						},
						"level": {
							"type": "long"
						},
						"name": {
							"type": "keyword"
						},
						"nameBak": {
							"type": "keyword"
						},
						"remarks": {
							"type": "keyword"
						},
						"root_cls": {
							"type": "keyword"
						},
						"std_cls": {
							"type": "keyword"
						},
						"voter": {
							"type": "keyword"
						},
						"votes_score": {
							"type": "long"
						}
					}
				},
				"equalgroup": {
					"type": "keyword"
				},
				"essence": {
					"type": "keyword"
				},
				"feiwen_remark_paths": {
					"type": "keyword"
				},
				"first_source": {
					"properties": {
						"id": {
							"type": "long"
						},
						"name": {
							"type": "keyword"
						},
						"sitename": {
							"type": "keyword"
						},
						"siteurl": {
							"type": "keyword"
						},
						"url": {
							"type": "keyword"
						}
					}
				},
				"from": {
					"type": "long"
				},
				"fs_content_risks": {
					"type": "nested",
					"properties": {
						"count": {
							"type": "long"
						},
						"keywords": {
							"type": "keyword"
						},
						"risk_level": {
							"type": "long"
						},
						"risk_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						}
					}
				},
				"fs_content_risks_entities": {
					"type": "nested",
					"properties": {
						"count": {
							"type": "long"
						},
						"keywords": {
							"type": "keyword"
						},
						"risk_level": {
							"type": "long"
						},
						"risk_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						}
					}
				},
				"fs_created_at": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"fs_media_remark": {
					"type": "keyword"
				},
				"goagent": {
					"type": "keyword"
				},
				"guess_created": {
					"type": "keyword"
				},
				"has_campaign": {
					"type": "keyword"
				},
				"hash_tag": {
					"type": "keyword"
				},
				"header": {
					"properties": {
						"matches": {
							"type": "boolean"
						},
						"text": {
							"type": "keyword"
						}
					}
				},
				"headline": {
					"type": "keyword"
				},
				"hidden": {
					"type": "keyword"
				},
				"host": {
					"type": "keyword"
				},
				"html_hash": {
					"type": "keyword"
				},
				"html_simhash": {
					"type": "keyword"
				},
				"icp_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"id": {
					"type": "keyword"
				},
				"id_article": {
					"type": "keyword"
				},
				"id_delivery": {
					"type": "keyword"
				},
				"id_site": {
					"type": "keyword"
				},
				"idx": {
					"type": "keyword"
				},
				"imgs": {
					"type": "keyword"
				},
				"industries_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"industry_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"internal_search_reply": {
					"properties": {
						"id_article": {
							"type": "long"
						},
						"id_site": {
							"type": "long"
						},
						"text": {
							"type": "keyword"
						}
					}
				},
				"ip_country": {
					"type": "keyword"
				},
				"ip_province": {
					"type": "keyword"
				},
				"irrelevant_num": {
					"type": "long"
				},
				"is_chief": {
					"type": "boolean"
				},
				"is_cover": {
					"type": "keyword"
				},
				"keywords": {
					"type": "keyword"
				},
				"kg_infos": {
					"properties": {
						"brand_depth": {
							"type": "long"
						},
						"brand_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						},
						"category_depth": {
							"type": "long"
						},
						"category_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						},
						"collection_depth": {
							"type": "long"
						},
						"collection_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						},
						"count": {
							"type": "long"
						},
						"gender": {
							"type": "keyword"
						},
						"keywords": {
							"type": "keyword"
						},
						"keywords_tokens": {
							"type": "text",
							"analyzer": "whitespace",
							"fielddata": true
						},
						"origin_kw": {
							"type": "keyword"
						},
						"product_type": {
							"type": "keyword"
						},
						"sentence_index": {
							"type": "long"
						},
						"value": {
							"properties": {
								"score": {
									"type": "long"
								},
								"weight": {
									"type": "long"
								},
								"words": {
									"type": "keyword"
								}
							}
						},
						"viewport_depth": {
							"type": "long"
						},
						"viewport_head": {
							"type": "keyword"
						},
						"viewport_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						},
						"viewport_tail": {
							"type": "keyword"
						}
					}
				},
				"language": {
					"properties": {
						"encoding": {
							"type": "keyword"
						},
						"text": {
							"type": "keyword"
						}
					}
				},
				"language_code": {
					"type": "keyword"
				},
				"like_count": {
					"type": "long"
				},
				"like_num": {
					"type": "long"
				},
				"local_rcf822_time": {
					"properties": {
						"text": {
							"type": "keyword"
						}
					}
				},
				"local_time": {
					"properties": {
						"GMT": {
							"type": "long"
						},
						"text": {
							"type": "keyword"
						}
					}
				},
				"managers": {
					"type": "nested",
					"properties": {
						"basis": {
							"type": "keyword"
						},
						"company_full_name": {
							"type": "keyword"
						},
						"company_id": {
							"type": "keyword"
						},
						"company_level": {
							"type": "long"
						},
						"company_name": {
							"type": "keyword"
						},
						"l1": {
							"type": "keyword"
						},
						"l2": {
							"type": "keyword"
						},
						"name": {
							"type": "keyword"
						},
						"title": {
							"type": "keyword"
						},
						"voter": {
							"type": "keyword"
						},
						"votes_score": {
							"type": "long"
						}
					}
				},
				"managers_entities": {
					"type": "nested",
					"properties": {
						"basis": {
							"type": "keyword"
						},
						"company_full_name": {
							"type": "keyword"
						},
						"company_id": {
							"type": "keyword"
						},
						"company_level": {
							"type": "long"
						},
						"company_name": {
							"type": "keyword"
						},
						"id": {
							"type": "keyword"
						},
						"l1": {
							"type": "keyword"
						},
						"l2": {
							"type": "keyword"
						},
						"name": {
							"type": "keyword"
						},
						"title": {
							"type": "keyword"
						},
						"voter": {
							"type": "keyword"
						},
						"votes_score": {
							"type": "float"
						}
					}
				},
				"mark": {
					"type": "keyword"
				},
				"mark_info_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"mark_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"media": {
					"type": "keyword",
					"fields": {
						"word": {
							"type": "text",
							"analyzer": "hanlp_index"
						}
					}
				},
				"media_category": {
					"type": "keyword"
				},
				"media_en": {
					"type": "keyword"
				},
				"media_hao": {
					"type": "keyword"
				},
				"media_industry": {
					"type": "keyword"
				},
				"media_industry_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"media_info_affect_weight": {
					"type": "long"
				},
				"media_info_level": {
					"type": "long"
				},
				"media_info_level_name": {
					"type": "keyword"
				},
				"media_info_name": {
					"type": "keyword"
				},
				"media_info_risk_level": {
					"type": "long"
				},
				"media_info_spread_depth_weight": {
					"type": "long"
				},
				"media_level": {
					"type": "keyword"
				},
				"media_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"media_platform": {
					"type": "keyword"
				},
				"media_property": {
					"type": "keyword"
				},
				"media_rank": {
					"type": "keyword"
				},
				"media_risks": {
					"type": "nested",
					"properties": {
						"count": {
							"type": "long"
						},
						"keywords": {
							"type": "keyword"
						},
						"risk_level": {
							"type": "long"
						},
						"risk_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						}
					}
				},
				"media_risks_entities": {
					"type": "nested",
					"properties": {
						"count": {
							"type": "long"
						},
						"risk_level": {
							"type": "long"
						},
						"risk_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						}
					}
				},
				"media_subject": {
					"type": "keyword"
				},
				"media_tag": {
					"type": "keyword"
				},
				"media_type": {
					"type": "keyword"
				},
				"mediatype": {
					"properties": {
						"clip": {
							"type": "boolean"
						},
						"fulltext": {
							"type": "boolean"
						},
						"haslogo": {
							"type": "boolean"
						},
						"hastext": {
							"type": "boolean"
						},
						"paywall": {
							"type": "boolean"
						},
						"text": {
							"type": "keyword"
						},
						"timemap": {
							"type": "boolean"
						}
					}
				},
				"meta_data": {
					"type": "object"
				},
				"mfc": {
					"type": "keyword"
				},
				"mid": {
					"type": "keyword"
				},
				"model": {
					"type": "keyword"
				},
				"modified": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"music": {
					"type": "keyword"
				},
				"negative_words": {
					"properties": {
						"freq": {
							"type": "long"
						},
						"score": {
							"type": "long"
						},
						"word": {
							"type": "keyword"
						}
					}
				},
				"offset_dynamic_id": {
					"type": "keyword"
				},
				"opinion": {
					"type": "keyword"
				},
				"orig_url": {
					"type": "keyword"
				},
				"page": {
					"type": "keyword"
				},
				"page_rect": {
					"properties": {
						"origin": {
							"type": "float"
						},
						"size": {
							"type": "float"
						}
					}
				},
				"page_size": {
					"type": "long"
				},
				"paper_size": {
					"type": "float"
				},
				"pdf_uri": {
					"type": "keyword"
				},
				"pic_uri": {
					"type": "keyword"
				},
				"pos_score": {
					"type": "long"
				},
				"position": {
					"type": "keyword"
				},
				"post_created": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"priority": {
					"type": "keyword"
				},
				"product_mentions": {
					"type": "keyword"
				},
				"product_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"product_type": {
					"type": "keyword"
				},
				"project_id": {
					"type": "keyword"
				},
				"project_info": {
					"properties": {
						"customer_code": {
							"type": "keyword"
						},
						"deleted": {
							"type": "keyword"
						},
						"keywords_dict": {
							"properties": {
								"keyword": {
									"type": "keyword"
								},
								"times": {
									"type": "long"
								}
							}
						},
						"keywords_in_title": {
							"type": "keyword"
						},
						"keywords_score": {
							"type": "long"
						},
						"locked": {
							"type": "keyword"
						},
						"mail_sent": {
							"type": "keyword"
						},
						"project_id": {
							"type": "keyword"
						},
						"read": {
							"type": "keyword"
						},
						"region_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						},
						"repository": {
							"type": "keyword"
						},
						"sorted": {
							"type": "long"
						},
						"tag1_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						},
						"tag2_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						},
						"tag_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						},
						"tendency": {
							"type": "keyword"
						},
						"timestamp": {
							"type": "long"
						},
						"topic_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						}
					}
				},
				"projects": {
					"type": "nested"
				},
				"province": {
					"type": "keyword"
				},
				"pub_scope": {
					"type": "keyword"
				},
				"pub_site": {
					"type": "keyword"
				},
				"pub_source": {
					"type": "keyword"
				},
				"publisher": {
					"type": "keyword"
				},
				"query": {
					"properties": {
						"bool": {
							"properties": {
								"must": {
									"properties": {
										"range": {
											"properties": {
												"created": {
													"properties": {
														"from": {
															"type": "date",
															"format": "yyyy/MM/dd HH:mm:ss z"
														},
														"to": {
															"type": "date",
															"format": "yyyy/MM/dd HH:mm:ss z"
														}
													}
												}
											}
										},
										"terms": {
											"properties": {
												"tendency": {
													"type": "keyword"
												}
											}
										}
									}
								}
							}
						}
					}
				},
				"race_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"rank": {
					"type": "long"
				},
				"rank_total": {
					"type": "long"
				},
				"raw_title": {
					"type": "keyword"
				},
				"read": {
					"type": "keyword"
				},
				"read_num": {
					"type": "long"
				},
				"ref_id": {
					"type": "keyword"
				},
				"region_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"rel": {
					"type": "keyword"
				},
				"rel2": {
					"type": "keyword"
				},
				"rel_level": {
					"type": "long"
				},
				"relation_risks": {
					"type": "nested",
					"properties": {
						"count": {
							"type": "long"
						},
						"keywords": {
							"type": "keyword"
						},
						"risk_level": {
							"type": "long"
						},
						"risk_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						}
					}
				},
				"relation_risks_entities": {
					"type": "nested",
					"properties": {
						"count": {
							"type": "long"
						},
						"risk_level": {
							"type": "long"
						},
						"risk_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						}
					}
				},
				"relevant_num": {
					"type": "long"
				},
				"relevant_words": {
					"type": "keyword"
				},
				"report_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"repost_num": {
					"type": "long"
				},
				"reposts_count": {
					"type": "long"
				},
				"retweeted_status": {
					"properties": {
						"author": {
							"type": "keyword"
						},
						"body": {
							"type": "keyword"
						},
						"comment_num": {
							"type": "long"
						},
						"created": {
							"type": "date",
							"format": "yyyy/MM/dd HH:mm:ss z"
						},
						"like_num": {
							"type": "long"
						},
						"media": {
							"type": "keyword"
						},
						"media_type": {
							"type": "keyword"
						},
						"read_num": {
							"type": "long"
						},
						"repost_num": {
							"type": "long"
						},
						"share_num": {
							"type": "long"
						},
						"text": {
							"type": "text",
							"analyzer": "hanlp_index",
							"search_analyzer": "hanlp_standard"
						},
						"title": {
							"type": "keyword"
						},
						"uri": {
							"type": "keyword"
						},
						"user": {
							"properties": {
								"biz": {
									"type": "keyword"
								},
								"desc": {
									"type": "keyword"
								},
								"description": {
									"type": "keyword"
								},
								"doc_count": {
									"type": "long"
								},
								"follower_num": {
									"type": "long"
								},
								"followers_count": {
									"type": "long"
								},
								"id_str": {
									"type": "keyword"
								},
								"profile_image_url": {
									"type": "keyword"
								},
								"screen_name": {
									"type": "keyword"
								},
								"total_like_count": {
									"type": "long"
								}
							}
						}
					}
				},
				"risk_level": {
					"type": "long"
				},
				"risk_words": {
					"type": "keyword"
				},
				"share_count": {
					"type": "long"
				},
				"share_num": {
					"type": "long"
				},
				"shortlink": {
					"type": "keyword"
				},
				"show_industries_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"site_name": {
					"type": "keyword"
				},
				"size": {
					"type": "long"
				},
				"source_id": {
					"type": "keyword"
				},
				"source_index": {
					"type": "keyword"
				},
				"source_type": {
					"type": "keyword"
				},
				"spider_type": {
					"type": "keyword"
				},
				"sport_member_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"sport_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"sport_race_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"sport_team_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"spread_power": {
					"type": "long"
				},
				"src": {
					"type": "keyword"
				},
				"start_time": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"stimestamp": {
					"type": "keyword"
				},
				"stimestamp_index": {
					"type": "keyword"
				},
				"stock_code": {
					"type": "keyword"
				},
				"stock_market_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"stock_name": {
					"type": "keyword"
				},
				"sub_title": {
					"type": "keyword"
				},
				"summary": {
					"type": "keyword"
				},
				"summary2": {
					"properties": {
						"matches": {
							"type": "boolean"
						},
						"text": {
							"type": "keyword"
						}
					}
				},
				"tags": {
					"type": "keyword"
				},
				"ted_score": {
					"type": "long"
				},
				"tendency": {
					"type": "keyword"
				},
				"text": {
					"type": "text",
					"analyzer": "hanlp_index"
				},
				"time_exposed": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"time_grabbed": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"time_indexed": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"time_queued": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"time_uploaded": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"title": {
					"type": "text",
					"fields": {
						"raw": {
							"type": "keyword"
						},
						"term": {
							"type": "text",
							"analyzer": "hanlp_index",
							"search_analyzer": "hanlp_standard",
							"fielddata": true
						}
					},
					"analyzer": "hanlp_index"
				},
				"title_tokens": {
					"type": "text",
					"analyzer": "whitespace",
					"fielddata": true
				},
				"topic": {
					"type": "keyword"
				},
				"topic_count": {
					"type": "long"
				},
				"topics": {
					"properties": {
						"id": {
							"type": "long"
						},
						"linktype_max": {
							"type": "long"
						},
						"linktype_now": {
							"type": "long"
						},
						"metacat": {
							"type": "long"
						},
						"metacat_level": {
							"type": "long"
						},
						"text": {
							"type": "keyword"
						}
					}
				},
				"uniqueId": {
					"type": "keyword"
				},
				"uniqueid": {
					"type": "keyword"
				},
				"unix_timestamp": {
					"type": "keyword"
				},
				"updated": {
					"type": "date",
					"format": "yyyy/MM/dd HH:mm:ss z"
				},
				"uri": {
					"type": "keyword"
				},
				"url_common": {
					"type": "keyword"
				},
				"use_proxy": {
					"type": "keyword"
				},
				"user": {
					"properties": {
						"avatar_large": {
							"type": "keyword"
						},
						"biz": {
							"type": "keyword"
						},
						"city": {
							"type": "keyword"
						},
						"desc": {
							"type": "keyword"
						},
						"description": {
							"type": "keyword"
						},
						"doc_count": {
							"type": "long"
						},
						"enterprise_name": {
							"type": "keyword"
						},
						"follow_count": {
							"type": "long"
						},
						"follower_num": {
							"type": "long"
						},
						"followers_count": {
							"type": "long"
						},
						"friends_count": {
							"type": "long"
						},
						"gender": {
							"type": "keyword"
						},
						"id": {
							"type": "keyword"
						},
						"id_str": {
							"type": "keyword"
						},
						"level_name": {
							"type": "keyword"
						},
						"location": {
							"type": "keyword"
						},
						"name": {
							"type": "keyword"
						},
						"nickname": {
							"type": "keyword"
						},
						"pic": {
							"type": "keyword"
						},
						"portait": {
							"type": "keyword"
						},
						"portrait": {
							"type": "keyword"
						},
						"profile_image_url": {
							"type": "keyword"
						},
						"profile_img_url": {
							"type": "keyword"
						},
						"province": {
							"type": "keyword"
						},
						"red_id": {
							"type": "keyword"
						},
						"screen_name": {
							"type": "keyword"
						},
						"sex": {
							"type": "keyword"
						},
						"short_id": {
							"type": "keyword"
						},
						"statuses_count": {
							"type": "long"
						},
						"total_like_count": {
							"type": "long"
						},
						"uid": {
							"type": "keyword"
						},
						"uniqueId": {
							"type": "keyword"
						},
						"unique_id": {
							"type": "keyword"
						},
						"uri": {
							"type": "keyword"
						},
						"url": {
							"type": "keyword"
						},
						"user_id": {
							"type": "keyword"
						},
						"user_name": {
							"type": "keyword"
						},
						"v_name": {
							"type": "keyword"
						},
						"verified": {
							"type": "boolean"
						},
						"verified_reason": {
							"type": "keyword"
						},
						"verified_type": {
							"type": "long"
						},
						"verified_user_type": {
							"type": "keyword"
						},
						"video_id": {
							"type": "keyword"
						},
						"wechat_id": {
							"type": "keyword"
						}
					}
				},
				"user_id": {
					"type": "keyword"
				},
				"vertical": {
					"type": "keyword"
				},
				"vertical_paths": {
					"type": "text",
					"analyzer": "path-analyzer",
					"fielddata": true
				},
				"video": {
					"type": "keyword"
				},
				"videos": {
					"type": "keyword"
				},
				"view_count": {
					"type": "long"
				},
				"wechat_id": {
					"type": "keyword"
				},
				"word_count": {
					"type": "long"
				},
				"yinbaojian_risks": {
					"type": "nested",
					"properties": {
						"count": {
							"type": "long"
						},
						"keywords": {
							"type": "keyword"
						},
						"risk_level": {
							"type": "long"
						},
						"risk_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						}
					}
				},
				"yinbaojian_risks_entities": {
					"type": "nested",
					"properties": {
						"count": {
							"type": "long"
						},
						"keywords": {
							"type": "keyword"
						},
						"risk_level": {
							"type": "long"
						},
						"risk_paths": {
							"type": "text",
							"analyzer": "path-analyzer",
							"fielddata": true
						}
					}
				}
			}
		},
		"settings": {
			"index": {
				"refresh_interval": "30s",
				"translog": {
					"flush_threshold_size": "1g",
					"sync_interval": "30s"
				},
				"provided_name": "entities-202206",
				"query": {
					"default_field": [
						"body",
						"title"
					]
				},
				"max_result_window": "100000",
				"creation_date": "1657263368996",
				"store": {
					"type": "mmapfs"
				},
				"analysis": {
					"analyzer": {
						"path-analyzer": {
							"tokenizer": "path-tokenizer"
						}
					},
					"tokenizer": {
						"path-tokenizer": {
							"skip": "0",
							"type": "path_hierarchy",
							"replacement": "/",
							"delimiter": "/"
						}
					}
				},
				"number_of_replicas": "1",
				"uuid": "oKjKgWUPQ_Orno5pbZHwwg",
				"version": {
					"created": "7030099"
				},
				"warmer": {
					"enabled": "false"
				},
				"routing": {
					"allocation": {
						"total_shards_per_node": "3"
					}
				},
				"number_of_shards": "3",
				"merge": {
					"scheduler": {
						"max_thread_count": "8"
					}
				}
			}
		}
	}
}

 */