const Student = require('../Model/studentModel');

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
