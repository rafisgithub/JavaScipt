function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hourDegree = (hours + minutes / 60) * 30;
    const minuteDegree = minutes * 6;
    const secondDegree = seconds * 6;
  
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");
  
    hourHand.style.transform = `translate(-50%, -50%) rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `translate(-50%, -50%) rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `translate(-50%, -50%) rotate(${secondDegree}deg)`;
  }
  
  setInterval(updateClock, 1000);
  

  function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const digitalClock = document.querySelector(".digital-clock");
  digitalClock.textContent = `${hour < 10 ? "0" : ""}${hour}:${minute < 10 ? "0" : ""}${minute}:${second < 10 ? "0" : ""}${second}`;
}

function rotateHand(element, angle) {
  element.style.transform = `rotate(${angle}deg)`;
}

function setClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourAngle = (hour / 12) * 360 + (minute / 60) * 30;
  const minuteAngle = (minute / 60) * 360;
  const secondAngle = (second / 60) * 360;

  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  rotateHand(hourHand, hourAngle);
  rotateHand(minuteHand, minuteAngle);
  rotateHand(secondHand, secondAngle);

  updateClock();
}

setInterval(setClock, 1000);

function setClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    
    const hourAngle = (hour / 12) * 360 + (minute / 60) * 30;
    const minuteAngle = (minute / 60) * 360;
    const secondAngle = (second / 60) * 360;
  
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");
  
    // Calculate the exact angles for each hand based on the current time
    const hourHandAngle = hourAngle + (minute / 60) * 30;
    const minuteHandAngle = minuteAngle + (second / 60) * 6;
    const secondHandAngle = secondAngle;
  
    // Apply the angles to each hand using a CSS transform
    hourHand.style.transform = `rotate(${hourHandAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandAngle}deg)`;
    secondHand.style.transform = `rotate(${secondHandAngle}deg)`;
  }
  
  setInterval(setClock, 1000);
  