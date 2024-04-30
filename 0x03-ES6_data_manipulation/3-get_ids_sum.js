export default function getStudentIdsSum(args) {
  if (!Array.isArray(args)) return [];
  return args.reduce((prev, next) => prev.id + next.id, 0);
}
