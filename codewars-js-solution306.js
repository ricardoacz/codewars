// 7 kyu
// Naughty or Nice

function naughtyOrNice(data) {
  const year = data
  
  let nice = 0
  let bad = 0
  
  for (let month in year) {
    if (Object.hasOwnProperty.call(year, month)) {
      for (let day in year[month]) {
        if (Object.hasOwnProperty.call(year[month], day)) {
          if (year[month][day] === 'Nice') {
            nice++
          } else if (year[month][day] === 'Naughty'){
            bad++
          }
        }
      }
    }
  }
  
  if (nice >= bad) {
    return 'Nice!'
  } else {
    return 'Naughty!'
  }
}
