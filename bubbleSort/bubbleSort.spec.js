const bubbleSort = require('./bubbleSort');

describe('bubbleSort', () => {
  test('sorts an unsorted array', () => {
    expect(bubbleSort([3, 2, 10, 100, 74])).toEqual([2, 3, 10, 74, 100]);
  });
  test('sorts 1 element', () => {
    expect(bubbleSort([3])).toEqual([3]);
  });
  test('sorts 0 elements', () => {
    expect(bubbleSort([])).toEqual([]);
  });
});
