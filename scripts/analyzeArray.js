const analyzeArray = (arr) => {
  for (const el of arr) {
    if (typeof el !== "number") return "array contains non-numbers";
  }
  const sum = arr.reduce((acc, curr) => {
    return acc + curr;
  });
  const length = arr.length;
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { average, min, max, length };
};

export default analyzeArray;
