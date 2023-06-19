 const countingEnding = (arr, correct, count = 0) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === correctValue) {
      count += 1;
    }
  }
  // return count;
  console.log(count);
}

export default countingEnding;
