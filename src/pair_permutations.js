const numbers = [1, 2, 3, 4, 5];

function* createConsecutivePairs(number, numbers) {
  let index = 0;

  while (index < numbers.length ) {
    yield [number, numbers[index++]];
  }
};

for (let term = 1; term <= numbers.length; term++) {
  const pairs = createConsecutivePairs(term, numbers);
  console.log([...pairs]);
}
