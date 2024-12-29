let $ = document;
let h1 = $.querySelector("h1");
let temp_number = $.querySelector("#temp_number");
let result = $.querySelector(".result");
let buttonConvert = $.querySelector(".button_convert");
let buttonReset = $.querySelector(".button_reset");
let buttonChange = $.querySelector(".button_change");
let defaultConvert = "cToF";
let convertedValue;
let count = 0;

function converter() {
  number = Number(temp_number.value);
  result.style.display = "initial";
  result.style.left = "606px";
  if (isNaN(number) || temp_number.value === "") {
    result.innerHTML = "you must enter a number";
    result.style.left = "566px";
  } else if (defaultConvert == "cToF") {
    convertedValue = (number * 1.8 + 32).toFixed(2);
    result.innerHTML = number + " °C = " + convertedValue + " °F";
  } else if (defaultConvert == "fToC") {
    convertedValue = ((number - 32) / 1.8).toFixed(2);
    result.innerHTML = number + " °F = " + convertedValue + " °C";
  }
}

function changer() {
  if (count % 2) {
    h1.innerHTML = "celcius to farenheit converter";
    temp_number.placeholder = "°C";
    defaultConvert = "cToF";
    $.title = "°C to °F";
  } else {
    h1.innerHTML = "farenheit to celcius converter";
    temp_number.placeholder = "°F";
    defaultConvert = "fToC";
    $.title = "°F to °C";
  }

  count++;
}

function resetter() {
  count = 1;
  changer();
  result.style.display = "none";
  temp_number.value = "";
}

buttonConvert.addEventListener("click", converter);
buttonChange.addEventListener("click", changer);
buttonReset.addEventListener("click", resetter);
