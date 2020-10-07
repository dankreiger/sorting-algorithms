const quickSort = require('./quickSort');

describe('quickSort', () => {
  test('sorts an unsorted array', () => {
    expect(quickSort([3, 2, 10, 100, 74, 55, 60, 18])).toEqual([
      2,
      3,
      10,
      18,
      55,
      60,
      74,
      100,
    ]);
  });

  test('sorts 1 element', () => {
    expect(quickSort([3])).toEqual([3]);
  });
  test('sorts 0 elements', () => {
    expect(quickSort([])).toEqual([]);
  });
});
