const parseDate = require('./index')
const timezone = 'Europe/Kiev'

console.log(parseDate('через 5 секунд', timezone))
console.log(parseDate('через 10 минут', timezone))
console.log(parseDate('через 1 час', timezone))
console.log(parseDate('через 3 дня', timezone))
console.log(parseDate('через 7 недель', timezone))
console.log(parseDate('через 4 месяца', timezone))
console.log(parseDate('через 2 года', timezone))
console.log(parseDate('через 5 лет', timezone))
