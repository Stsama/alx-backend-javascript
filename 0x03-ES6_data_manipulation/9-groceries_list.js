export default function groceriesList() {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  const big = new Map();
  for (const el of arr) {
    big.set(el[0], el[1]);
  }
  return big;
}
