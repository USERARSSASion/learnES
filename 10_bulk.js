/*
 * @Author: majl
 * @Date: 2023-10-12 16:13:58
 * @LastEditors: majl
 * @LastEditTime: 2024-02-29 11:15:42
 * @FilePath: /learnES/10_bulk.js
 * @Description: 
 * 
 */

function bulkCreate(options, isComment = false) {
  //新建的文档都需要给定_id
  let {data} = options;
  if (!_.isArray(data) || data.length === 0) {
    return Promise.resolve();
  }
  let index = getSubjectIndex(options, isComment);
  let body = _.flatMap(data, item => {
    return [
      {create: {_index: index, _id: item._id}},
      esFormat(item, isComment)
    ]
  });
  return hosts.client.bulk({refresh: true, body})
    .then(({body}) => {
      if (body.errors) {
        //出错，因为是批量添加，每一个item的错误可能不同
        //items->[action]->error
        //输出错误日志
        let errors = _.chain(body)
          .get("items", [])
          .filter(item => {
            //所有的数据都是create，所以这里判断201即可
            //todo：将错误与数据对应起来
            return _.get(item, "create.status") !== 201;
          })
          .value();
        logger.error(JSON.stringify(errors));
      }
      return options;
    })
}

function bulkUpdate(options) {
  //需要更新的文档都有ids
  if (!_.isArray(options.ids) || options.ids.length === 0) {
    return Promise.reject(new Error("no doc to update"));
  }
  let index = getSubjectIndex(options);
  let update = options.update;
  let body = _.flatMap(options.ids, id => {
    return [
      {
        update: {
          _index: index,
          _id: id
        }
      },
      {
        doc: update
      }
    ]
  });
  return hosts.client.bulk({refresh: true, body})
    .then(() => {
      //todo 处理批量更新返回值中的错误
      return Promise.resolve();
    })
}


/**
 * 批量更新数据
 * @param tasks
 * @param esResults es查询结果
 * @returns {Promise<>}
 */
function batchUpdate(tasks, esResults) {
  let body = _.chain(tasks)
    .flatMap(item => {
      let obj = _.find(esResults, { uri: item.uri });
      if (!obj) {
        return;
      }
      logger.info(`==> batchUpdate, uri: ${obj.uri}`)
      let projects = buildProjects(obj.projects, item.projects);
      return [
        {
          update: _.pick(obj, ["_index", "_id"])
        },
        {
          doc: {
            projects: projects,
          }
        }
      ]
    })
    .compact()
    .value();

  console.log('==> 批量更新数据 body:', body);

  return client.bulk({ refresh: true, body })
    .then(resp => {
      console.log("==> update result: ", JSON.stringify(resp.body));
      // todo?
      //  return csm.publish(body);
      return Promise.resolve();
    })
}