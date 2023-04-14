const eleGrid = document.querySelector(".grid");

for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 3 === 0 && i % 5 == 0) {
    eleGrid.innerHTML += `<div class="cell fizzbuzz">FizzBuzz</div>`;
  } else if (i % 3 === 0) {
    eleGrid.innerHTML += `<div class="cell fizz">Fizz</div>`;
  } else if (i % 5 === 0) {
    eleGrid.innerHTML += `<div class="cell buzz">Buzz</div>`;
  } else {
    eleGrid.innerHTML += `<div class="cell">${i}</div>`;
  }
}
