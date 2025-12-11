const buckets = [];

function* partition(value, predicate) {

  let index = 0;
  const bucket = [];

  while (true) {
    bucket.push(index);
    console.log({ bucket });

    if (predicate(bucket)) {
      buckets.push([...bucket]);
      bucket.length = 0;

    }
    yield index++;
  }
}
const numbers = [1, 2, 3, 1, 4, 5];
const parted = partition(numbers, (bucket) => bucket.length === 3);




console.log(parted.next());
console.log(parted.next());
console.log(parted.next());
console.log(parted.next());
console.log(parted.next());
console.log(parted.next());
console.log(parted.next());
console.log(parted.next());
console.log(parted.next());
console.log(parted.next());

console.log({ buckets });


