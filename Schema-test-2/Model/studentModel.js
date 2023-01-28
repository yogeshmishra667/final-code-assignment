const mongoose = require('mongoose');

//mongoose schema and schema type
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    default: '',
    // validate: [validateLocalStrategyProperty, 'Please fill in your first name']
    required: [true, 'Please fill in your first name'],
  },
  lastName: {
    type: String,
    trim: true,
    default: '',
    // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
    required: [true, 'Please fill in your last name'],
  },
  displayName: { type: String, trim: true },
  municipality: { type: String },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
