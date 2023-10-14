const colors = [
  "#3498db",
  "#e74c3c",
  "#27ae60",
  "#f39c12",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#e67e22",
];

const colorBox = document.getElementById("color-box");
const btn = document.getElementById("btn");

btn.addEventListener("click", changeColor);

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function changeColor() {
  const newColor = getRandomColor();
  colorBox.style.backgroundColor = newColor;
}
