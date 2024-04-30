export default function getStudentsByLocation(args, city) {
  if (!Array.isArray(args)) return [];
  return args.filter((element) => element.location === city);
}
