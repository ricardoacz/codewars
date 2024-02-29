// 7 kyu
// Naughty or Nice

// Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

// {
//     January: {
//         '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
//     },
//     February: {
//         '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
//     },
//     ...
//     December: {
//         '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
//     }
// }
// Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"

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
