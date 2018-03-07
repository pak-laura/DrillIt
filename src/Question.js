export default () => {
  const first = Math.floor(Math.random() * 12);
  const second = Math.floor(Math.random() * 12);
  const opChoose = Math.floor(Math.random() * 3);
  const operands = [first, second, '='];
  if (opChoose === 0) {
    operands[2] = '+';
  } else if (opChoose === 1) {
    operands[2] = '-';
    if (first < second) {
      const temp = first;
      operands[0] = second;
      operands[1] = temp;
    }
  } else {
    operands[2] = '*';
  }

  return operands;
};
