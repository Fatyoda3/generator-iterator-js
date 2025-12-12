const buckets = [];
/* partition by identity: [1,1,1,2,2,1,1,3,3,2] => 
  [[1,1,1],[2,2],[1,1],[3,3],[2]]

 isEven: [1,3,1,2,2,1,1,3,5,2] => [[1,3,1],[2,2],[1,1,3,5],[2]] */
function* partition(value, predicate) {
  let index = 0;
  const bucket = [];

  while (index < value.length) {
    bucket.push(value[index]);

    if (predicate(bucket , 3)) {
      buckets.push([...bucket]);
      bucket.length = 0;
    }

    yield index++;
  }
}
const numbers = [1, 2, 3, 1, 4, 5];

const parted = partition(numbers, (bucket, length) => bucket.length === length);


for (const _ of parted);

// /* console.log */(parted.next());
// /* console.log */(parted.next());
// /* console.log */(parted.next());
// /* console.log */(parted.next());
// /* console.log */(parted.next());
// /* console.log */(parted.next());
// /* console.log */(parted.next());
// /* console.log */(parted.next());
// /* console.log */(parted.next());
// /* console.log */(parted.next());

console.log({ buckets });


