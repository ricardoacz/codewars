// 8 kyu
// Duck Duck Goose

function duckDuckGoose(players, goose) {
  goose = goose - 1
  
  return players[(goose % players.length)].name
}
