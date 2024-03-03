// 7 kyu
// Naughty or Nice

function naughtyOrNice(data) {
  const year = data

  let naughty = 0;
  let nice = 0;

  for (const month in year) {
    if (Object.hasOwnProperty.call(year, month)) {
      for (const day in year[month]) {
        if (Object.hasOwnProperty.call(year[month], day)) {
          if (year[month][day] === 'Naughty') {
            naughty++;
          } else if (year[month][day] === 'Nice') {
            nice++;
          }
        }
      }
    }
  }

  if (naughty > nice) {
    return 'Naughty!';
  } else if (nice >= naughty) {
    return 'Nice!';
  }
}
