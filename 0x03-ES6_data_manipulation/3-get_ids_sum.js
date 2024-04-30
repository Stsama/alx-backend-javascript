export default function getStudentIdsSum(args) {
  if (!Array.isArray(args)) return [];
  const init = 0;
  return args.reduce((prev, next) => prev + next, init);
}
