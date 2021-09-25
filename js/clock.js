const clock = document.querySelector("#clock")

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const second = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = (`${hours < 10 ? `오전 ${hours}` : `${hours > 12 ? `오후 0${hours - 12}` : `오전 ${hours}`}`}:${minutes}:${second}`)}


getClock();
setInterval(getClock, 1000)
