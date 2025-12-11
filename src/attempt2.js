const buckets = [];
/* partition by identity: [1,1,1,2,2,1,1,3,3,2] => 
  [[1,1,1],[2,2],[1,1],[3,3],[2]]

 isEven: [1,3,1,2,2,1,1,3,5,2] => [[1,3,1],[2,2],[1,1,3,5],[2]] */
function* partition(value, predicate) {
  let index = 0;
  const evenBucket = [];
  const oddBucket = [];

  while (index < value.length) {
    const bucket = predicate(value[index]) ? evenBucket : oddBucket;
    bucket.push(value[index]);
    yield index++;
  }
  buckets.push({ evenBucket }, { oddBucket });
}

const numbers = [1, 2, 3, 1, 4, 5];
const parted = partition(numbers, (value) => !(value & 1));

for (const _ of parted);

console.log({ buckets });