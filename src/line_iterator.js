function* lineIterator(text = '', delimiter = '') {
  let newLineIndex = 0;

  while (newLineIndex < text.length) {
    let delIndex = text.indexOf(delimiter, newLineIndex);
    if (delIndex === -1) {
      delIndex = text.length;
    }

    const line = text.slice(newLineIndex, delIndex);
    newLineIndex = delIndex + 1;
    yield line;
  }
}
const text = "hello\nthis\nis\nme\nfat\nyoda\nI\nhope\nyou\nare\nhaving\na\ngood\ntime\nbeing\nwith\nme";
const lines = lineIterator(text, '\n');

for (const previousNewLine of lines) {
  console.log(previousNewLine);
}