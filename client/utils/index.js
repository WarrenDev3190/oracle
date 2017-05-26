import R from 'ramda'

/**
 * [capitalize description]
 * @type {[type]}
 */
export const capitalize = R.compose(
  R.join(''),
  R.juxt([R.compose(R.toUpper, R.head), R.tail])
)

/**
 * [idToTitle description]
 * @type {[type]}
 */
export const idToTitle = R.compose(
  R.join(' '),
  R.map(capitalize),
  R.split('-')
)

/**
 * [isUpdateMutation description]
 * @type {Boolean}
 */
export const isUpdateMutation = R.compose(
  R.not,
  R.isEmpty,
  R.match('UPDATE_')
)

/**
 * [reduceByKey description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
export const reduceByKey = (key) => {
  return (arr) => {
    return arr.reduce((acc, item) => {
      if (acc[item[key]]) {
        acc[item[key]] = [...acc[item[key]], item]
        return acc
      }
      acc[item[key]] = []
      return acc
    }, {})
  }
}
