function* createConsecutivePairs(data) {
  let index = 0;

  while (index < data.length - 1) {
    yield [data[index++], data[index]];
  }
};

const numbers = [1, 2, 3, 4, 5, 6];

const pairs = createConsecutivePairs(numbers);
for (const pair of pairs) {
  console.log(pair);
  
}
// console.log();
// console.log(pairs.next());
// console.log(pairs.next());
// console.log(pairs.next());
// console.log(pairs.next());
