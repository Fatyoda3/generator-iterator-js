
function* partition(value, isEven) {
  const buckets = [];
  let index = 0;

  const b1 = [];
  const b2 = [];

  while (index < value.length - 1) {

    while (isEven(value[index])) {
      b1.push(value[index]);
      index += 1;
    }

    while (!(isEven(value[index]))) {
      b2.push(value[index]);
      index += 1;
    }

    if (b1.length) {
    buckets.push([...b1]);
    }

    if (b2.length) {
    buckets.push([...b2]);
    }

    b1.length = 0;
    b2.length = 0;

    yield [index, buckets];
  }
}

// const numbers = [2, 2, 3, 1, 4, 5];
const numbers = [1, 2, 3, 1, 2, 2, 1, 1, 3, 5, 2];
const parted = partition(numbers, (value) => !(value & 1));

for (const [index, buckets] of parted) {
  console.log(buckets);
}