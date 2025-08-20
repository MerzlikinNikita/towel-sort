module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }

  const resultArr = matrix.map((el, index) =>
    index % 2 !== 0 ? el.reverse() : el
  );

  return resultArr.flat();
};
