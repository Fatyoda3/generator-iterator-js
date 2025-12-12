function* flip(values) {
  const flipped = [];
  for (let i = 0; i < values.length; i += 2) {
    const next = values[i + 1];
    const curr = values[i];
    let toPush = [next, curr];

    if (next === undefined)
      toPush = [curr];

    flipped.push(toPush);
    yield flipped;
  }
}


const numbers = [1, 2, 3, 4, 5,6  ];

const flippedNumbers = flip(numbers);
for (const el of flippedNumbers) {
  console.log(el);

};