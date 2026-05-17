const students = [
  { id: 1, name: 'Alice', scores: [7, 8, 9] },
  { id: 2, name: 'Taylor', scores: [8, 8, 9] },
  { id: 3, name: 'Vincent', scores: [9, 8, 9] }
];

function findTopStudent(students) {
  let topStudent = null;
  let highestAverage = 0;

  for (const student of students) {
    const average = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    if (average > highestAverage) {
      highestAverage = average;
      topStudent = student;
    }
  }
  if (topStudent) {
    console.log(
      `Student with the highest average scores: ${topStudent.id}, ${topStudent.name}, [${topStudent.scores}]`
    );
  }
}
findTopStudent(students);

function findGreaterThan8(students) {
  const result = [];
  for (const student of students) {
    const average = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    if (average > 8) {
      result.push(student.name);
    }
  }
  console.log(`Students with average scores greater than 8: ${result} `);
}
findGreaterThan8(students);