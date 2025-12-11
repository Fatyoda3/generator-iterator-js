const buckets = [];
/* isEven: [1,3,1,2,2,1,1,3,5,2] => [[1,3,1],[2,2],[1,1,3,5],[2]] */
function* partition(value, isEven) {
  let index = 0;
  // const bucket = [];
  while (index < value.length - 1) {
    const b1 = [];
    const b2 = [];

    while (isEven(value[index])) {
      b1.push(value[index++]);
    }

    while (!(isEven(value[index]))) {
      b2.push(value[index++]);
      console.log('helo');

    }

    buckets.push([...b1], [...b2]);

    b1.length = 0;
    b2.length = 0;

    yield index;
  }
}

const numbers = [2, 2, 3, 1, 4, 5];
const parted = partition(numbers, (value) => !(value & 1));

for (const _ of parted);

console.log({ buckets });