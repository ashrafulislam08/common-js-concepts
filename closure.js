function kitchen() {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
}

const firstServer = kitchen();
console.log(firstServer());

function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const watch1 = stopWatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
