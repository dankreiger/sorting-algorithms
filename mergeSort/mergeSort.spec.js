const mergeSort = require('./mergeSort');

describe('mergeSort', () => {
  test('sorts an unsorted array', () => {
    expect(mergeSort([3, 2, 10, 100, 74]).join(' ')).toEqual([2, 3, 10, 74, 100].join(' '));
  });
});
