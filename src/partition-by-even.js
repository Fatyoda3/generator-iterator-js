function* partition(value, predicate) {
  const buckets = [];
  let index = 0;

  const parted = [];

  while (index < value.length) {

    while (!(predicate(value[index])) && index < value.length) {
      parted.push(value[index]);
      index += 1;
    }
    buckets.push([...parted]);
    parted.length = 0;

    while (predicate(value[index]) && index < value.length) {
      parted.push(value[index]);
      index += 1;
    }
    buckets.push([...parted]);
    parted.length = 0;

    yield buckets;
  }
  
  return buckets;
}

// const numbers = [2, 2, 3, 1, 4, 5];
const numbers = [1, 2, 3, 1, 2, 2, 1, 1, 3, 5, 2];
const parted = partition(numbers, (value) => (value % 2 === 0));

for (const buckets of parted) {
  console.log(buckets);
}