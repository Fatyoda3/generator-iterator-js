const linesFound = [];

function* lineIterator(text = '', delimiter = '') {
  let i = 0;


  while (true) {
    yield i;
    const delIndex = text.indexOf(delimiter, i);
    const line = text.slice(i, delIndex);

    i = delIndex + 1;

    console.log({ i, delIndex });
    console.log({ line });

  }

}
const text = "hello\nthis\nis\nme\nfat\nyoda\nI\nhope\nyou\nare\nhaving\na\ngood\ntime\nbeing\nwith\nme";

const lines = lineIterator(text, '\n');
// lines.next();
// lines.next();
// lines.next();
// lines.next();
// lines.next();