const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    // if (event.target.id === "grey") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === "blue") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === "yellow") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === "red") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === "white") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === "pink") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === "green") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === "purple") {
    //     body.style.backgroundColor = event.target.id;
    //   }

    switch (event.target.id) {
      case "grey":
        body.style.backgroundColor = event.target.id;
        break;
      case "blue":
        body.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = event.target.id;
        break;
      case "red":
        body.style.backgroundColor = event.target.id;
        break;
      case "white":
        body.style.backgroundColor = event.target.id;
        break;
      case "pink":
        body.style.backgroundColor = event.target.id;
        break;
      case "green":
        body.style.backgroundColor = event.target.id;
        break;
      case "purple":
        body.style.backgroundColor = event.target.id;
        break;

      default:
        break;
    }
  });
});
