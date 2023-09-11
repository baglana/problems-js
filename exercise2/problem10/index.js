function getStudentsWithNamesAndTopNotes(students) {
  let studentsWithNamesAndTopNotes = [...students];
  for (let student of studentsWithNamesAndTopNotes) {
    student.topNote = student.notes.reduce((a, b) => Math.max(a, b), 0);
    delete student.notes;
  }
  return studentsWithNamesAndTopNotes;
}

module.exports = getStudentsWithNamesAndTopNotes;