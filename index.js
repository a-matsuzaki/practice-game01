const startBtn = document.querySelector("#startBtn");
const restartBtn = document.querySelector("#restartBtn");
const container = document.querySelector("#container");

startBtn.addEventListener("click", () => {
  if(getComputedStyle(container).display == 'none'){
    container.style.display = "block";
  }
})
restartBtn.addEventListener("click", () => {
  if(getComputedStyle(container).display == 'block'){
    container.style.display = "none";
  }
})
