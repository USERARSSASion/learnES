1 es npm 库联系项目。

我一直使用的是用 axios 请求链接的方式使用，但是最近发现了问题，在一次对历史数据统计的时候，用 axios 一次次统计数据是否存在的时候，每隔几条都会有一次请求结果非常的慢，但是并没有报错而且太规律了。

排除代码和 es 的问题，问题定位是请求的时候链接没有断掉导致的，虽然不知道为什么，后用库的时候并没有出现相同问题，所以以此项目用来联系。

| method | url 地址                                        | 描述                                                                                      |
| ------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------- |
| PUT    | localhost:9200/索引名称/类型名称/文档 id        | 创建文档以及更新文档（指定文档 id），如果文档 id 不变，重复提交，是可以直接覆盖之前的数据 |
| POST   | localhost:9200/索引名称/类型名称                | 创建文档（随机文档 id）                                                                   |
| POST   | localhost:9200/索引名称/类型名称/文档id/_update | 修改文档                                                                                  |
| DELETE | localhost:9200/索引名称/类型名称/文档id         | 删除文档                                                                                  |
| GET    | localhost:9200/索引名称/类型名称/文档id         | 查询文档通过文档 id                                                                       |
| POST   | localhost:9200/索引名称/类型名称/_seaarch       | 查询所有数据                                                                              |
