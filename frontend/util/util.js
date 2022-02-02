export const splitCap = (word) => {
  let arr = word.split('-')
  arr[0].toUpperCase()
  return arr.join(' ')
}