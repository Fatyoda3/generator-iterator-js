const iterator = () => {
  return {
    current: 0,

    next() {
      return { value: this.current++, done: false };
    },
  };
};
// const iter1 = iterator();
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());

const rangeIterator = (from, to, step = 1) => {
  return {
    current: from,

    next() {
      if (this.current >= to) {
        return { value: this.current, done: true };
      }
      return { value: this.current++, done: false };
    }
  };
};

// const range = rangeIterator(2, 4, 1);
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());

const lineIterator = (text = '') => {

  return {
    previous: 0,
    current: 0,
    last: '',
    newLine() {
      const newLineIndex = text.indexOf('\n', this.previous);
      const endOfLine = newLineIndex === -1 ? text.length : newLineIndex;
      const line = text.slice(this.previous, endOfLine);
      this.current = newLineIndex;
      this.previous = this.current + 1;

      this.last = line;

      return line;
    },

    next() {
      if (this.current === -1) {
        console.log('END OF FILE');

        return { value: this.last, done: true };
      }

      return { value: this.newLine(), done: false };
    }
  };
};

const text = 'HELLO\nWORLD\nTHIS';
const l = lineIterator(text);
console.log(l.next());
console.log(l.next());
console.log(l.next());
console.log(l.next());
