/*
 * @Author: majl
 * @Date: 2024-03-21 15:34:26
 * @LastEditors: majl
 * @LastEditTime: 2024-12-19 09:57:00
 * @FilePath: /learnES/14_reindex.js
 * @Description: 有 stats_day 的可以用此脚本分批导入
 * 
 */
import { Client } from 'es7';
import XLSX from 'xlsx'
import dayjs from 'dayjs';
import _ from 'lodash';
import config from '../config.js'

// 电商评论索引
// const FROM_ES_INDEX = 'ecoflow-nps';
// const TO_ES_INDEX = 'ecoflow-nps-test';

const FROM_ES_INDEX = 'ecoflow-socal';
const TO_ES_INDEX = 'ecoflow-socal-preview';

// const FROM_ES_INDEX = 'ecoflow-nps-bk';
// const TO_ES_INDEX = 'ecoflow-nps-test';

// const FROM_ES_INDEX = 'ecoflow-servicemail';
// const TO_ES_INDEX = 'ecoflow-servicemail-preview';

// const FROM_ES_INDEX = 'ecoflow-nps-push';
// const TO_ES_INDEX = 'ecoflow-nps-push-preview';

// const FROM_ES_INDEX = 'ecoflow-nps-device';
// const TO_ES_INDEX = 'ecoflow-nps-device-preview';

console.log('from', FROM_ES_INDEX);
console.log('to', TO_ES_INDEX);

const DATE_FORMATE = "YYYY/MM/DD HH:mm:ss Z"

const elasticSearchConnection = () => {
  return new Client({
    node: config.ES_HOST
  });
};

// const pingElasticsearch = async (client) => {
//   return client.ping({
//       requestTimeout: 10000,
//   });
// };

const elasticClient = elasticSearchConnection();

try {
  // 获取源索引的映射
  const sourceMapping = await elasticClient.indices.getMapping({
    index: FROM_ES_INDEX
  });

  // 创建目标索引时使用源索引的映射
  await elasticClient.indices.create({
    index: TO_ES_INDEX,
    body: {
      mappings: sourceMapping.body[FROM_ES_INDEX].mappings
    }
  });
  
  const res = await elasticClient.reindex({
    waitForCompletion: false,
    body: {
      source: {
        index: FROM_ES_INDEX
      },
      dest: {
        index: TO_ES_INDEX
      }
    }
  });
  console.log(res, 'res');
} catch (error) {
  console.log(error, 'error');
}
