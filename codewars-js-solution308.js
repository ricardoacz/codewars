// 7 kyu
// Naughty or Nice

function naughtyOrNice(data) {
  const year = data
  
  let good = 0
  let bad = 0
  
  for (const month in year) {
    if (Object.hasOwnProperty.call(year, month)) {
      for (const day in year[month]) {
        if (Object.hasOwnProperty.call(year[month], day)) {
          if (year[month][day] === 'Nice') {
            good++
          } else if (year[month][day] === 'Naughty') {
            bad++
          }
        }
      }
    }
  }
  
  if (good >= bad) {
    return ('Nice!')
  } else {
    return ('Naughty!')
  }
}
