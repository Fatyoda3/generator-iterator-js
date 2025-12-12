function* chunkBy(size, values) {
  const chunks = [];
  for (let index = 0; index < values.length; index += size) {
    chunks.push(values.slice(index, index + size));
    yield chunks;
  }

}

const numbers = [1, 2, 3, 4, 5, 6,7];

const chunkier = chunkBy(3, numbers);
for (const el of chunkier) {
  console.log(el);
}