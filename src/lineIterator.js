function* lineIterator(text = '', delimiter = '') {
  let start = 0;
  let delimiterIndex = text.indexOf(delimiter, start);
  
  if (delimiterIndex === -1) {
    delimiterIndex = text.length;
  }

  const line = text.slice(start, delimiterIndex);
  start = delimiterIndex + 1;

  yield line;
}
const text = "hello\nthis\nis\nme\nfat\nyoda\nI\nhope\nyou\nare\nhaving\na\ngood\ntime\nbeing\nwith\nme";

const lines = lineIterator(text, '\n');

for (const line of lines) {
  console.log(line);
}