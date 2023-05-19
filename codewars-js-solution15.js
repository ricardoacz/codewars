// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  let totalPoints = 0
  
  function calculatePoints(x,y) {
    if (x > y) {
      return 3
    } else if (x < y) {
      return 0
    } else if (x === y) {
      return 1
    }
  }
  
  games.forEach(element => (
    totalPoints += calculatePoints(parseInt(element.split("")[0]), parseInt(element.split("")[2])
  )))
    return totalPoints            
}

// The following is a better solution, it uses destructuring assignment inside the forEach loop to the get the values of x and y faster.

// function points(games) {
//   let totalPoints = 0;

//   function calculatePoints(x, y) {
//     if (x > y) {
//       return 3;
//     } else if (x < y) {
//       return 0;
//     } else if (x === y) {
//       return 1;
//     }
//   }

//   games.forEach(element => {
//     const [x, y] = element.split(":");
//     totalPoints += calculatePoints(parseInt(x), parseInt(y));
//   });

//   return totalPoints;
// }
