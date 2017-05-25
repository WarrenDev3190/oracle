import R from 'ramda'

export const capitalize = R.compose(
  R.join(''),
  R.juxt([R.compose(R.toUpper, R.head), R.tail])
)

export const isUpdateMutation = R.compose(
  R.not,
  R.isEmpty,
  R.match('UPDATE_')
)

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
