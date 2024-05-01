export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((element) => element.location === city)
    .map((person) => {
      const grades = newGrades.filter((ele) => ele.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
