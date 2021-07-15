const range = document.getElementById('range');

// Update label based  on slider value
range.addEventListener('input', function (e) {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;
  label.innerHTML = value;
});
