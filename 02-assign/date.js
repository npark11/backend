function getToday() {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const date = new Date()
  const yyyy = date.getFullYear()
  const MM = month[date.getMonth()]
  const DD = date.getDate()
  const HH = date.getHours()
  const mm = date.getMinutes()
  const ss = date.getSeconds()

  return `Today is ${MM} ${DD}, ${yyyy} at ${HH}:${mm}:${ss}.`
}

console.log(getToday())