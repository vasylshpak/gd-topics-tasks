const area = document.querySelector(".area");
const clean = document.querySelector(".clear");
const textArea = "textArea";
const inputStorage = window.localStorage;

area.value = inputStorage.getItem(textArea);

area.addEventListener("input", (event) => {
  inputStorage.setItem(textArea, area.value);
});

clean.addEventListener("click", (event) => {
  inputStorage.removeItem(textArea);
  area.value = "";
});
