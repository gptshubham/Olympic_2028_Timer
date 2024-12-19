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
