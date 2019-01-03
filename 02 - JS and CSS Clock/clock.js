const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hrsHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;

    const hours = now.getHours();
    const hrsDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hrsHand.style.transform = `rotate(${hrsDegrees}deg)`;
    console.log(hours);
  }

  //SET INTERVAL SETS AN INTERVAL OF TIME FOR THIS SCRIPT TO RUN.
  setInterval(setDate, 1000);
