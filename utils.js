const ES_DATE_FORMAT = "YYYY/MM/DD HH:mm:ss Z"
const INDEX_DATE_FORMAT = "YYYYMM";

function getESIndexArray (begin, end) {
  begin = moment(begin);
  end = moment(end);
  if(begin > end)
      throw new Error(`begin > end: ${begin} > ${end}`)

  let indexArray = [];
  let beginStr = begin.format(INDEX_DATE_FORMAT);
  let endStr = end.format(INDEX_DATE_FORMAT);
  while (beginStr <= endStr) {
      indexArray.push(beginStr);
      begin.add(1, 'month');
      beginStr = begin.format(INDEX_DATE_FORMAT);
  }
  return indexArray;
}

module.exports = {
  getESIndexArray,
  ES_DATE_FORMAT
}
