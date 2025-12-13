const symbol = {};

let index = 0;

const symbol_ = (key) => {
  if (symbol[key])
    return symbol[key];

  symbol[key] = key;
  return symbol[key];

};

const range = (st, end, step = 1) => {
  let index = st;

  return {
    next() {
      let current = index;

      if (index > end) {
        return { value: current, done: true };
      }
      index += step;
      return { value: current, done: false };
    },

    [Symbol.iterator]() {
      return this;
    }
  };

};


const range5 = range(1, 5, 1);

const t = [...range5];
console.log(t);
