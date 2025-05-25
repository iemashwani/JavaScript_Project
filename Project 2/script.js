const form = document.querySelector("form");
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span> Your BMI is: ${BMI}</span> </br>`;
    if (BMI < 18.5) {
      result.innerHTML += `<span> You are underweight.</span>`;
    } else if (BMI >= 18.5 && BMI < 24.9) {
      result.innerHTML += `<span> You have a normal weight.</span>`;
    } else if (BMI >= 25) {
      result.innerHTML += `<span> You are overweight.</span>`;
    } 
  }
});
