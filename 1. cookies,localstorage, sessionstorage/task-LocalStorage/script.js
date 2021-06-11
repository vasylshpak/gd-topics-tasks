const area = document.querySelector(".area");
const clean = document.querySelector(".clear");
const textArea = "textArea";
const inputStorage = window.localStorage;

area.value = inputStorage.getItem(textArea);

area.addEventListener("input", () => {
  inputStorage.setItem(textArea, area.value);
});

clean.addEventListener("click", () => {
  inputStorage.removeItem(textArea);
  area.value = "";
});
