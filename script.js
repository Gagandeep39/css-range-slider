const range = document.getElementById('range');

// Update label based  on slider value
// Move the label above the toggle
range.addEventListener('input', function (e) {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width'); //Fetch width of SLider
  const labelWidth = getComputedStyle(label).getPropertyValue('width'); // Fetch width of label

  const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2); // Removes 'px' from end of string
  const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2); // Removes 'px' from end of string

  const max = +e.target.max; // Max value of slider
  const min = +e.target.min; // Min value of slider

  // Left position based on toggle position
  const left =
    value * (numWidth / max) -
    numLabelWidth / 2 +
    map(value, min, max, 10, -10);

  label.style.left = `${left}px`;
  label.innerHTML = value;
});

// Map range of number to another range
function map(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
