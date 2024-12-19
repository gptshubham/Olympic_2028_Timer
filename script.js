function displayTime() {
  const date1 = new Date();
  const date2 = new Date('2028-07-21T00:00:00');

  const date = date2 - date1;

  const days = Math.floor(date / (1000 * 60 * 60 * 24));

  const hours = Math.floor((date / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((date / (1000 * 60)) % 60);

  const seconds = Math.floor((date / 1000) % 60);

  const daysElement = document.querySelector('#no-of-days');

  daysElement.innerHTML = days;

  const hoursElement = document.querySelector('#hours .number');
  hoursElement.innerHTML = hours;

  const minutesElement = document.querySelector('#minutes .number');
  minutesElement.innerHTML = minutes;

  const secondsElement = document.querySelector('#seconds .number');
  secondsElement.innerHTML = seconds;
}

setInterval(displayTime, 1000);

// Styling the page using DOM Manipulation

// body styles
const body = document.body;
body.style.color = 'white';
body.style.margin = '0';
body.style.height = '100vh';
body.style.fontFamily = 'helvetica, sans-serif';
body.style.background =
  'linear-gradient(60deg, #333 0%,rgb(34, 132, 141) 30%,rgb(166, 167, 171) 60%,rgb(196, 25, 196) 100%)';

// header styles
const header = document.querySelector('#head');
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.alignItems = 'center';
header.style.padding = '5px 10px';
header.style.background = 'linear-gradient(to bottom, #333, #555)';

// search bar styles
const searchBox = document.querySelector('#search-box');
searchBox.style.backgroundColor = 'white';
searchBox.style.color = 'black';
searchBox.style.padding = '5px';
searchBox.style.borderRadius = '3px';
searchBox.style.height = '20px';

const inputTag = document.querySelector('input');
inputTag.style.border = 'none';
inputTag.style.height = '20px';

const searchBoxLine = document.querySelector('#search-box-line');
searchBoxLine.style.color = 'rgb(166, 167, 171)';

// first div styles
const firstDiv = document.querySelector('div');
firstDiv.style.display = 'flex';
firstDiv.style.justifyContent = 'center';
firstDiv.style.alignItems = 'center';

// logo styles
const logo = document.querySelector('#logo');
logo.style.margin = '0';
logo.style.fontWeight = '100';

const lastLetterOfLogo = document.querySelector('#logo-o');
lastLetterOfLogo.style.color = 'red';

// dropdown styles

const dropdown = document.querySelectorAll('.drop');

for (let item of dropdown) {
  item.style.paddingLeft = '20px';
}

const selections = document.querySelectorAll('select');

for (let option of selections) {
  option.style.background = 'inherit';
  option.style.border = 'none';
  option.style.color = 'white';
}
