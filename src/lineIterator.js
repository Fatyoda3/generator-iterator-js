const linesFound = [];

function* lineIterator(text = '', delimiter = '') {
  let previousNewLine = 0;

  while (previousNewLine!== -1 ) {
    yield previousNewLine;

    const delIndex = text.indexOf(delimiter, previousNewLine);
    const line = text.slice(previousNewLine, delIndex);

    previousNewLine = delIndex + 1;

    console.log({ i: previousNewLine, delIndex });
    console.log({ line });

  }

}

const text = "hello\nthis\nis\nme\nfat\nyoda\nI\nhope\nyou\nare\nhaving\na\ngood\ntime\nbeing\nwith\nme";

const lines = lineIterator(text, '\n');

for (const element of lines) {
  
}
// lines.next();
// lines.next();
// lines.next();
// lines.next();
// lines.next();
