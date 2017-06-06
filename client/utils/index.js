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

export const getMonthName = (monthNum) => {
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

  return monthNames[monthNum]

}

export const currentDateString = () => {

    var d = new Date()
    var day = d.getDate()
    var month = getMonthName(d.getMonth())
    var year = d.getFullYear()

    return month + " " + day + ", " + year

}

export const monthDayString = (dateS) => {

  var dateSNoT = dateS.substring(0, dateS.indexOf("T"))
  var datePieces = dateSNoT.split("-")
  var month = getMonthName(parseInt(datePieces[1]))
  var day = datePieces[2]

  return month + " " + day

}

export const newsSourceString = (source) => {
  return source.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
}

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
