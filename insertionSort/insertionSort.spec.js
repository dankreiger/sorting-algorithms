const insertionSort = require('./insertionSort');

describe('insertionSort', () => {
  test('sorts an unsorted array', () => {
    expect(insertionSort([3, 2, 10, 100, 74]).join(' ')).toEqual([2, 3, 10, 74, 100].join(' '));
  });
});
