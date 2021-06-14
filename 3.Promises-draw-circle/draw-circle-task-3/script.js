function setWidthAndHeight(element, sizePx) {
  element.style.height = `${sizePx}px`;
  element.style.width = `${sizePx}px`;
}

function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  setWidthAndHeight(div, 0);
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  return new Promise((resolve) => {
    setTimeout(() => {
      setWidthAndHeight(div, radius * 2);
      div.addEventListener("transitionend", () => resolve(div));
    });
  }).then((value) => {
    value.classList.add("message");
    value.append("Hello, world!");
  });
}
