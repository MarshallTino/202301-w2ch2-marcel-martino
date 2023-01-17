const strictEquals = (valueA, valueB) => {
  let result;
  if (Object.is(valueA, NaN) && Object.is(valueB, NaN)) {
    result = false;
  } else if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    result = true;
  } else if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    result = true;
  } else {
    result = Object.is(valueA, valueB);
  }
  return result;
};

export default strictEquals;
