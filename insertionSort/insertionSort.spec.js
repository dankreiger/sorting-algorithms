const insertionSort = require('./insertionSort');

describe('insertionSort', () => {
  test('sorts an unsorted array', () => {
    expect(insertionSort([3, 2, 10, 100, 74])).toEqual([2, 3, 10, 74, 100]);
    expect(insertionSort([3])).toEqual([3]);
  });
});
