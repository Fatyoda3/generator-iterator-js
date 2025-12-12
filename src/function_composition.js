function* compose(fn, initialValue) {
  let previousResult = initialValue;
  while (true) {
    const result = fn(previousResult);
    previousResult = result;

    yield result;
  }
}
const square = (value) => Math.pow(value, 2);

const composedSquare = compose(square, 0.5);

for (const el of composedSquare.take(10)) {
  console.log(el);
}