const eleGrid = document.querySelector(".grid");

for (let i = 0; i <= 100; i++) {
  console.log(i);
  eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
}
