function delay(ms) {
  return new Promise(function (resolve, reject) {
    if (ms < 0) return reject(new Error("Value must be positive"));
    setTimeout(() => resolve("Done"), ms);
  });
}

delay(3000).then(() => alert("выполнилось через 3 секунды"));
