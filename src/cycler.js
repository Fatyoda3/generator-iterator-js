function* cycle(numbers, count) {
  let index = 0;
  const cycles = [];
  while (index++ <= count) {
    // console.log({ index });
    cycles.push(...numbers);
    yield cycles;
  }
}

const numbers = [1, 2];

const numberCycle = cycle(numbers, 3);

for (const currentCycle of numberCycle) {
  console.log(currentCycle);
}
