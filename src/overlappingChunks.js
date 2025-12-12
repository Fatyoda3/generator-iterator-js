function* overlapChunk(overlapCount = 0, size, values) {
  const chunks = [];

  for (let index = 0; index < values.length; index += (size - overlapCount)) {
    chunks.push(values.slice(index, index + size));
    yield chunks;
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const overlappingChunks = overlapChunk(1, 4, numbers);
const overlappingChunks2 = overlapChunk(2, 4, numbers);

for (const el of overlappingChunks) {
  console.log(el);
}
console.log('second one should be chunks size of 4 and overlap of 2 element');

for (const el of overlappingChunks2) {
  console.log(el);
}