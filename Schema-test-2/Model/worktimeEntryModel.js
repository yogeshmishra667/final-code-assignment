const mongoose = require('mongoose');

//mongoose schema and schema type
const WorksTimeEntry = new mongoose.Schema({
  student: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
  ],
  timeEntries: {
    type: Object,
  },
});

const WorkTimeEntry = mongoose.model('WorkTimeEntry', WorksTimeEntry);

module.exports = WorkTimeEntry;
