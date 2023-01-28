const express = require('express');
const studentController = require('../Controller/studentController');
const workTimeEntryController = require('../Controller/workEntryController');

const Router = express.Router();

// routes for create and read student collection ⬇️
Router.route('/').get(studentController.getAllStudent);
Router.route('/').post(studentController.createStudent);

// routes for get all workTimeEntry collection ⬇️
Router.route('/workTimeEntries').get(workTimeEntryController.getAllWorkTimeEntries);
Router.route('/workentry').get(workTimeEntryController.getAllWorkEntry);
Router.route('/workentry').post(workTimeEntryController.postWorkEntry);

module.exports = Router;
