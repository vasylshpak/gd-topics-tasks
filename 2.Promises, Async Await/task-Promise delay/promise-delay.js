function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve("done"), ms);
  });
}

delay(3000).then(() => alert("выполнилось через 3 секунды"));
