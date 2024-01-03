// 7 kyu
// Is every value in the array an array?

const arrCheck = value => {
  return value.every((element) => {
    return Array.isArray(element)
  })
}
