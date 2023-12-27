POST /_bulk

{"update":{"_index":"paragraphs-web-202206","_id":"2f263432f11e11ecb922e4434b9f98ee"},"retry_on_conflict":3}
{"script":{"source":"for(int i=0;i<ctx._source.projects.length;i++){if(ctx._source.projects[i].customer_code=='enn'){for(int j=0;j<params.keys.length;j++){ctx._source.projects[i][params.keys[j]]=params.data[params.keys[j]];}break;}}","lang":"painless","params":{"data":{"tendency":"负面"},"keys":["tendency"]}}}
