const express = require('express');

const schoolController = require('../controllers/schoolController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(schoolController.createSchool)
  .get(authController.protect, schoolController.getAllSchool);

router
  .route('/:id')
  .get(schoolController.getSchool)
  .patch(schoolController.updateSchool)
  .delete(schoolController.deleteSchool);

module.exports = router;
