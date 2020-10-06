const quickSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }
  const pivot = nums[nums.length - 1];
  const lows = [];
  const highs = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= pivot) {
      lows.push(nums[i]);
    } else {
      highs.push(nums[i]);
    }
  }

  return [...quickSort(lows), pivot, ...quickSort(highs)];
};

module.exports = quickSort;
