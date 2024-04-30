import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(args = getListStudents()) {
  if (!Array.isArray(args)) return [];
  return args.reduce((prev, next) => prev + next.id, 0);
}
