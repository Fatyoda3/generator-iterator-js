const iterator = (predicate) => {
  return {
    current: 0,

    next() {
      if (predicate(this.current)) {
        return { value: this.current, done: true };
      }
      return { value: this.current++, done: false };
    },
  };
};

// const iter1 = iterator(x => x >= 5);
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
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
      return { value: this.current += step, done: false };
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
    lastLineOfText: '',

    newLine() {

      const newLineIndex = text.indexOf('\n', this.previous);
      const endOfLine = newLineIndex === -1 ? text.length : newLineIndex;
      const line = text.slice(this.previous, endOfLine);

      this.current = newLineIndex;
      this.previous = this.current + 1;

      this.lastLineOfText = line;

      return line;
    },

    next() {
      if (this.current === -1) {
        // console.log('END OF FILE');

        return { value: this.lastLineOfText, done: true };
      }

      return { value: this.newLine(), done: false };
    }
  };
};

// const text = 'HELLO\nWORLD\nTHIS';
// const l = lineIterator(text);

// console.log(l.next());
// console.log(l.next());
// console.log(l.next());
// console.log(l.next());

const rectangleIterator = (row, column) => {
  const line = '*'.repeat(column);

  return {
    index: 0,
    last: line,

    next() {

      // this.index += 1;
      if (this.index++ >= row) {
        return { done: true, value: this.last };
      }

      return {
        done: false, value: line
      };

    }


  };

};

const iterator1 = (predicate) => {
  return {
    current: 0,

    next() {
      if (predicate(this.current)) {
        return { value: this.current, done: true };
      }
      return { value: this.current++, done: false };
    },
  };
};
const rect = {
  [Symbol.iterator]: () => {
    return iterator1;
  }

};

// rect.next();
const t = [...rect];
console.log(t);


