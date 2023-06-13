const sizeInfoBtn = document.getElementById("size");

sizeInfoBtn.addEventListener("click", () => {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  alert(`Ширина экрана: ${screenWidth}, высота экрана: ${screenHeight}`);
});