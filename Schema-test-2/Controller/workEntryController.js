const Student = require('../Model/studentModel');
const WorkTimeEntry = require('../Model/worktimeEntryModel');

// main endpoint of the given test assignment ⬇️
exports.getAllWorkTimeEntries = async (req, res, next) => {
  try {
    const students = await Student.find();
    const studentsTimeEntries = [];
    for (let i = 0; i < students.length; i++) {
      const studentTimeEntries = await WorkTimeEntry.find({
        student: students[i]._id,
      });
      studentsTimeEntries.push(studentTimeEntries);
    }
    res.status(200).json({
      result: studentsTimeEntries.length,
      status: 'success',
      data: {
        studentsTimeEntries: studentsTimeEntries,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

//optional Endpoint for create and read WorkTimeEntry collection ⬇️

// get all workTimeEntry collection ⬇️
exports.getAllWorkEntry = async (req, res, next) => {
  try {
    const worksTimeEntry = await WorkTimeEntry.find().populate('student').exec();
    res.status(200).json({
      result: worksTimeEntry.length,
      status: 'success',
      data: {
        worksTimeEntry: worksTimeEntry,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

//create workTimeEntry collection ⬇️
exports.postWorkEntry = async (req, res, next) => {
  try {
    const workTimeEntry = await WorkTimeEntry.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        workTimeEntry: workTimeEntry,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
