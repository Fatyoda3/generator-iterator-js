const linesFound = [];

function* lineIterator(text = '', delimiter = '') {
  let previousNewLine = 0;


  while (previousNewLine < text.length) {
    yield previousNewLine;

    let delIndex = text.indexOf(delimiter, previousNewLine);
    if (delIndex === -1) {
      delIndex = text.length;
    }

    const line = text.slice(previousNewLine, delIndex);
    yield line;

    previousNewLine = delIndex + 1;
  }

}

const text = "hello\nthis\nis\nme\nfat\nyoda\nI\nhope\nyou\nare\nhaving\na\ngood\ntime\nbeing\nwith\nme";

const lines = lineIterator(text, '\n');
const linesCopy = Iterator.from(lines);

const tokens = [...lines];

// for (const x of lines) {
//   console.log(x);
// }

// lines.next();
// lines.next();
// lines.next();
// lines.next();
// lines.next();
