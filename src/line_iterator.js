function* lineIterator(text = '', delimiter = '') {
  let delIndex = 0;

  while (delIndex < text.length) {
    let newDelIndex = text.indexOf(delimiter, delIndex);
    
    if (newDelIndex === -1) {
      newDelIndex = text.length;
    }

    const line = text.slice(delIndex, newDelIndex);
    delIndex = newDelIndex + 1;

    yield line;
  }
}
const text = "hello\nthis\nis\nme\nfat\nyoda\nI\nhope\nyou\nare\nhaving\na\ngood\ntime\nbeing\nwith\nme";
const lines = lineIterator(text, '\n');

for (const previousNewLine of lines) {
  console.log(previousNewLine);
}