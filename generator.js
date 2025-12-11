function* increment() {

  for (let index = 0; index < 10; index++) {
    yield index;
  }

}
const inc = increment();
