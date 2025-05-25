const clock = document.getElementById("clock");

const date = document.getElementById("date");

setInterval(function () {
  let time = new Date();
//   console.log(date.toLocaleTimeString());
    clock.innerHTML = time.toLocaleTimeString();
    date.innerHTML = time.toLocaleDateString();
}, 1000);
