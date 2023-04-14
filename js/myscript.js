const eleGrid = document.querySelector(".grid");

for (let i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 3 == 0) {
    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">Fizz</div>`;
  } else if (i % 5 == 0) {
    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">Buzz</div>`;
  } else if (i % 3 && i % 5 == 0) {
    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">FizzBuzz</div>`;
  } else i !== 0;
  eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
}
