/*
 * @Author: majl
 * @Date: 2023-10-12 16:13:58
 * @LastEditors: majl
 * @LastEditTime: 2025-01-17 15:06:27
 * @FilePath: /learnES/11_exp.js
 * @Description: 
 * 
 */
/**
 * {
    "track_total_hits": false,
    "_source": true,
    "query": {
      "bool": {
        "must": [
          {
            "range": {
              "created": {
                "gte": "2024/01/01 00:00:00 +08:00",
                "lte": "2024/01/23 23:59:59 +08:00"
              }
            }
          },
          {
            "terms": {
              "source_type": [
                "CN Social"
              ]
            }
          }
        ],`
        "must_not": [
          {
            "terms": {
              "media_type": [
                "product",
                "utr",
                "transaction"
              ]
            }
          },
          {
            "term": {
              "project_info.deleted": "YES"
            }
          }
        ],
        "should": []
      }
    },
    "from": 0,
    "size": 0,
    "aggs": {
      "Positive": {
        "terms": {
          "field": "project_info.tendency",
          "include": "正面"
        },
        "aggs": {
          "title_tokens_nested": {
            "nested": {
              "path": "title_tokens_nested"
            },
            "aggs": {
              "words": {
                "significant_terms": {
                  "field": "title_tokens_nested.word",
                  "size": 50,
                  "background_filter": {
                    "bool": {
                      "must": [
                        {
                          "range": {
                            "created": {
                              "gte": "2023/06/10 00:00:01 +08:00",
                              "lte": "2024/07/23 23:59:59 +08:00"
                            }
                          }
                        },
                        {
                          "terms": {
                            "source_type": [
                              "CN Social"
                            ]
                          }
                        }
                      ],
                      "must_not": [
                        {
                          "terms": {
                            "media_type": [
                              "product",
                              "utr",
                              "transaction"
                            ]
                          }
                        },
                        {
                          "term": {
                            "project_info.deleted": "YES"
                          }
                        }
                      ],
                      "should": []
                    }
                  }
                },
                "aggs": {
                  "frq": {
                    "sum": {
                      "field": "title_tokens_nested.frq"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "Negative": {
        "terms": {
          "field": "project_info.tendency",
          "include": "负面"
        },
        "aggs": {
          "title_tokens_nested": {
            "nested": {
              "path": "title_tokens_nested"
            },
            "aggs": {
              "words": {
                "significant_terms": {
                  "field": "title_tokens_nested.word",
                  "size": 50,
                  "background_filter": {
                    "bool": {
                      "must": [
                        {
                          "range": {
                            "created": {
                              "gte": "2023/06/10 00:00:01 +08:00",
                              "lte": "2024/07/23 23:59:59 +08:00"
                            }
                          }
                        },
                        {
                          "terms": {
                            "source_type": [
                              "CN Social"
                            ]
                          }
                        }
                      ],
                      "must_not": [
                        {
                          "terms": {
                            "media_type": [
                              "product",
                              "utr",
                              "transaction"
                            ]
                          }
                        },
                        {
                          "term": {
                            "project_info.deleted": "YES"
                          }
                        }
                      ],
                      "should": []
                    }
                  }
                },
                "aggs": {
                  "frq": {
                    "sum": {
                      "field": "title_tokens_nested.frq"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "Neutral": {
        "terms": {
          "field": "project_info.tendency",
          "include": "中性"
        },
        "aggs": {
          "title_tokens_nested": {
            "nested": {
              "path": "title_tokens_nested"
            },
            "aggs": {
              "words": {
                "significant_terms": {
                  "field": "title_tokens_nested.word",
                  "size": 50,
                  "background_filter": {
                    "bool": {
                      "must": [
                        {
                          "range": {
                            "created": {
                              "gte": "2023/06/10 00:00:01 +08:00",
                              "lte": "2024/07/23 23:59:59 +08:00"
                            }
                          }
                        },
                        {
                          "terms": {
                            "source_type": [
                              "CN Social"
                            ]
                          }
                        }
                      ],
                      "must_not": [
                        {
                          "terms": {
                            "media_type": [
                              "product",
                              "utr",
                              "transaction"
                            ]
                          }
                        },
                        {
                          "term": {
                            "project_info.deleted": "YES"
                          }
                        }
                      ],
                      "should": []
                    }
                  }
                },
                "aggs": {
                  "frq": {
                    "sum": {
                      "field": "title_tokens_nested.frq"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
 */
/**
 * path 层级聚合
 * {
	"track_total_hits": true,
	"query": {
		"bool": {
			"must": [
				{
					"range": {
						"stats_day": {
							"to": "2024/03/31 23:59:59 +08:00",
							"from": "2024/01/01 00:00:00 +08:00"
						}
					}
				},
				{
					"term": {
						"status": "有效"
					}
				},
				{
					"terms": {
						"brand": [
							"ECOFLOW",
							"JACKERY",
							"GENEVERSE",
							"ANKER"
						]
					}
				},
				{
					"terms": {
						"products.product_paths": [
							"/储电/移动储能",
							"/储电/阳台储能",
							"/发电/太阳能板",
							"/用电/冰箱",
							"/用电/空调"
						]
					}
				},
				{
					"nested": {
						"path": "topic_infos",
						"query": {
							"bool": {
								"must": [
									{
										"terms": {
											"topic_infos.topic_paths": [
												"/使用场景",
												"/使用电器"
											]
										}
									}
								]
							}
						}
					}
				}
			],
			"must_not": [],
			"should": []
		}
	},
	"from": 0,
	"size": 1,
	"aggs": {
		"topic_infos": {
			"nested": {
				"path": "topic_infos"
			},
			"aggs": {
				"product_paths_1": {
					"terms": {
						"field": "topic_infos.topic_paths",
						"include": "/(使用场景|使用电器)+(/[^/]+){0}",
						"size": 500
					},
					"aggs": {
        				"product_paths_2": {
        					"terms": {
        						"field": "topic_infos.topic_paths",
        						"include": "/[^/]+(/[^/]+){1}",
        						"size": 500
        					},
        					"aggs": {
                				"product_paths_2": {
                					"terms": {
                						"field": "topic_infos.topic_paths",
                						"include": "/[^/]+(/[^/]+){2}",
                						"size": 500
                					},
                					"aggs": {
                						"reverse": {
                							"reverse_nested": {}
                						}
                					}
                				}
        					}
        				}
					}
				}
			}
		}
	}
}

# 反向嵌套聚合
{
	"track_total_hits": true,
	"query": {
		"bool": {
			"must": [
				{
					"range": {
						"stats_day": {
							"from": "2024/03/01 07:00:00 +08:00",
							"to": "2024/03/01 08:00:00 +08:00"
						}
					}
				},
				{
					"term": {
						"_id": "JP_AMZ_ECOFLOW_B0C378GM3C_ROLH94SBC4AAP_20240312"
					}
				},
				{
					"nested": {
						"path": "product_infos",
						"query": {
							"bool": {
								"must": [
									{
										"terms": {
											"product_infos.energy_capacity_level": [
												"1000-1999wh"
											]
										}
									}
								]
							}
						}
					}
				}
			],
			"must_not": [],
			"should": []
		}
	},
	"from": 0,
	"size": 100,
	"aggs": {
		"product_infos_1": {
			"nested": {
				"path": "product_infos"
			},
			"aggs": {
				"main": {
					"terms": {
						"field": "product_infos.type_code",
						"include": "product_main"
					},
					"aggs": {
						"type": {
							"terms": {
								"field": "product_infos.energy_capacity_level"
							},
							"aggs": {
								"level": {
									"reverse_nested": {},
									"aggs": {
										"trends": {
											"date_histogram": {
												"interval": "month",
												"field": "stats_day",
												"time_zone": "+08:00"
											},
											"aggs": {
												"tendency": {
													"terms": {
														"field": "tendency"
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"product_infos": {
			"nested": {
				"path": "product_infos"
			},
			"aggs": {
				"type": {
					"terms": {
						"field": "product_infos.type_code",
						"include": "product_main"
					},
					"aggs": {
						"level": {
							"terms": {
								"field": "product_infos.energy_capacity_level"
							},
							"aggs": {
								"trends": {
									"date_histogram": {
										"interval": "month",
										"field": "stats_day",
										"time_zone": "+08:00"
									},
									"aggs": {
										"tendency": {
											"terms": {
												"field": "tendency"
											},
											"aggs": {
												"reverse": {
													"reverse_nested": {}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"type": {
			"terms": {
				"field": "products.energy_capacity_level",
				"size": 10
			},
			"aggs": {
				"trends": {
					"date_histogram": {
						"interval": "month",
						"field": "stats_day",
						"time_zone": "+08:00"
					},
					"aggs": {
						"tendency": {
							"terms": {
								"field": "tendency"
							}
						}
					}
				}
			}
		}
	}
}

{
    "track_total_hits": true,
    "query": {
      "bool": {
        "must": [
          {
            "range": {
              "stats_day": {
                "to": "2024/03/31 23:59:59 +08:00"
              }
            }
          },
          {
            "term": {
              "status": "有效"
            }
          },
          {
            "terms": {
              "brand": [
                "ECOFLOW",
                "JACKERY",
                "ANKER"
              ]
            }
          },
          {
            "terms": {
              "products.product_paths": [
                "/储电/移动储能",
                "/储电/阳台储能",
                "/发电/太阳能板",
                "/用电/冰箱",
                "/用电/空调"
              ]
            }
          }
        ],
        "must_not": [],
        "should": []
      }
    },
    "from": 0,
    "size": 0,
    "aggs": {
      "product_infos": {
        "nested": {
          "path": "product_infos"
        },
        "aggs": {
          "filtered": {
            "filter": {
              "bool": {
                "must": [
                  {
                    "terms": {
                      "product_infos.product_paths": [
                        "/储电/移动储能",
                        "/储电/阳台储能",
                        "/发电/太阳能板",
                        "/用电/冰箱",
                        "/用电/空调"
                      ]
                    }
                  }
                ]
              }
            },
            "aggs": {
              "main": {
                "terms": {
                  "field": "product_infos.type_code",
                  "include": "product_main"
                },
                "aggs": {
                  "type": {
                    "terms": {
                      "field": "product_infos.energy_capacity_level",
                      "size": 10
                    },
                    "aggs": {
                      "reverse": {
                        "reverse_nested": {},
                        "aggs": {
                          "trends": {
                            "date_histogram": {
                              "interval": "month",
                              "field": "stats_day",
                              "time_zone": "+08:00"
                            },
                            "aggs": {
                              "tendency": {
                                "terms": {
                                  "field": "tendency"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  {
    "track_total_hits": true,
    "query": {
      "bool": {
        "minimum_should_match": 1,
        "must": [
          {
            "range": {
              "comments": {
                "gt": 0
              }
            }
          },
          {
            "term": {
              "doc_type": "POST"
            }
          },
          {
            "term": {
              "status": "有效"
            }
          }
        ],
        "must_not": [],
        "should": [
          {
            "bool": {
              "must": [
                {
                  "term": {
                    "es_comment_num": 0
                  }
                }
              ]
            }
          },
          {
            "bool": {
              "must_not": [
                {
                  "exists": {
                    "field": "es_comment_num"
                  }
                }
              ]
            }
          }
        ]
      }
    },
    "from": 0,
    "size": 1,
    "aggs": {},
    "sort": [],
    "_source": []
    }
  }
 */