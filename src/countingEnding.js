 const countingEnding = (arr) => { // если входные данные - массив
  let count = 0;
  const correctValue = 'гриб';
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === correctValue) {
      count += 1;
    }
  }
  // return count;
  console.log(count);
}

export default countingEnding;