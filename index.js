const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = array.find(game => game.result === "W")
  return !!result ? result.year : undefined
}