function toCelsius (input) {
  var celsius = (input - 32) * 5/9;
  var answer = Math.round(celsius);
  return answer;
}

// console.log(toCelsius(45));

function toFahrenheit (input) {
  var fahrenheit = (input * 9) / 5 + 32;
  var answer = Math.round(fahrenheit);
  return answer;
}

// console.log(toFahrenheit(45));

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (e) {

  // This will actually return an array containing both of the radio buttons
  // so you will need to look at each item in the array and see if the 'checked'
  // property is true (sample code provided)
  var optionChosen = document.getElementsByName("conversion_type");
  var input = document.getElementById("user-temp").value;
  var show = document.getElementById('showcase');

  // for loop
  for (var i = 0; i < optionChosen.length; i++) {
    if (optionChosen[i].checked && optionChosen[i].value === 'celsius') {
        toCelsius(input);
        show.innerHTML = "<p>" + input + " Fahrenheit is " + toCelsius(input) + " degrees Celsius";
    }
    else if (optionChosen[i].checked && optionChosen[i].value === 'fahrenheit') {
      toFahrenheit(input);
      show.innerHTML = "<p>" + input + " Celsius is " + toFahrenheit(input) + " degrees Fahrenheit";
    }
  }
}


// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.addEventListener('click', determineConverter);
