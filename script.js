// Get the display element
var display = document.getElementById('display');

// Attach click event listeners to buttons
var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleClick);
}

// Click event handler
function handleClick() {
  var value = this.innerHTML;

  if (value === '=') {
    // Evaluate the expression
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  } else if (value === 'C') {
    // Clear the display
    display.value = '';
  } else {
    // Append the clicked value to the display
    display.value += value;
  }
}
