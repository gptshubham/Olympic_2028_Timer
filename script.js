const date1 = new Date();
const date2 = new Date('2028-07-21T00:00:00');

const date = date2 - date1;
// console.log(date)
const days = Math.floor(date / (1000 * 60 * 60 * 24));
// console.log(days)
const hours = Math.floor((date / (1000 * 60 * 60)) % 24);
// console.log(hours)
const minutes = Math.floor((date / (1000 * 60)) % 60);
// console.log(minutes)
const seconds = Math.floor((date / 1000) % 60);
// console.log(seconds)

const daysElement = document.querySelector('#no-of-days');

daysElement.innerHTML = days;

const hoursElement = document.querySelector('#hours .number');
hoursElement.innerHTML = hours;

const minutesElement = document.querySelector('#minutes .number');
minutesElement.innerHTML = minutes;

const secondsElement = document.querySelector('#seconds .number');
secondsElement.innerHTML = seconds;
