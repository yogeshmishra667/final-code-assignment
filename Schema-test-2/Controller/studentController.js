const Student = require('../Model/studentModel');
const WorkTimeEntry = require('../Model/worktimeEntryModel');

exports.getAllStudent = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      result: students.length,
      status: 'success',
      data: {
        students: students,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createStudent = async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        student: newStudent,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

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
