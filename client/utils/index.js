import R from 'ramda'

/**
 * [capitalize description]
 * @type {String}
 */
export const capitalize = R.compose(
  R.join(''),
  R.juxt([R.compose(R.toUpper, R.head), R.tail])
)

<<<<<<< HEAD
export const apFormat = (title) => {
=======
export const apFormat = function (title) {
>>>>>>> recommended-flag
  const apFormatExclusions = [
    'a',
    'for',
    'so',
    'an',
    'in',
    'the',
    'and',
    'nor',
    'to',
    'at',
    'of',
    'up',
    'but',
    'on',
    'yet',
    'by',
    'or']
  const characterExclusions = ['"', "'", "'", '-', '"', '"']
  const words = title.split(' ').map(title => title.trim()).map(function (title) {
    if (apFormatExclusions.indexOf(title) === -1) {
      return title.charAt(0).toUpperCase() + title.slice(1)
    } else {
      return title
    }
  })
    // handles quoted first words
  if (characterExclusions.indexOf(words[0][0]) === -1) {
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
  } else {
    words[0] = words[0].slice(0, 1) + words[0].charAt(1).toUpperCase() + words[0].slice(2)
  }
  words[words.length - 1] = words[words.length - 1].charAt(0).toUpperCase() + words[words.length - 1].slice(1)

  return words.join(' ')
}

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
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

  return monthNames[monthNum]
}

export const currentDateString = () => {
  var d = new Date()
  var day = d.getDate()
  var month = getMonthName(d.getMonth())
  var year = d.getFullYear()

  return month + ' ' + day + ', ' + year
}

export const monthDayString = (dateS) => {
  var dateSNoT = dateS.substring(0, dateS.indexOf('T'))
  var datePieces = dateSNoT.split('-')
  var month = getMonthName(parseInt(datePieces[1]))
  var day = datePieces[2]

  return month + ' ' + day
}

export const newsSourceString = (source) => {
  return source.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
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
