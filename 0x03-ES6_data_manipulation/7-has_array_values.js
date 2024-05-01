export default function hasValuesFromArray(set1, arr) {
  for (const el of arr) {
    if (!set1.has(el)) return false;
  }
  return true;
}
