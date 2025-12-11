const linesFound = [];

function* lineIterator(text = '', delimiter = '') {
  let previousNewLine = 0;


  while (previousNewLine < text.length) {
    // yield previousNewLine; 

    let delIndex = text.indexOf(delimiter, previousNewLine);
    if (delIndex === -1) {
      delIndex = text.length;
    }

    const line = text.slice(previousNewLine, delIndex);
    yield [previousNewLine, line];

    previousNewLine = delIndex + 1;
  }

}

const text = "hello\nthis\nis\nme\nfat\nyoda\nI\nhope\nyou\nare\nhaving\na\ngood\ntime\nbeing\nwith\nme";

const lines = lineIterator(text, '\n');
const linesCopy = Iterator.from(lines.take(10));

// const tokens = [...lines.take(10)];
// console.log({ copy: [...linesCopy], tokens: '' });

for (const [previousNewLine, line] of lines) {
  console.log(previousNewLine, line);
}

// lines.next();
// lines.next();
// lines.next();
// lines.next();
// lines.next();
