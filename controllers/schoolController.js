const School = require('../models/schoolModel');

exports.createSchool = async (req, res) => {
  try {
    const newSchool = await School.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        school: newSchool,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllSchool = async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).json({
      status: 'success',
      results: schools.length,
      data: {
        schools,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getSchool = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        school,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: 'fail',
      message: err,
    });
  }
};

exports.updateSchool = async (req, res) => {
  try {
    const updatedSchool = await School.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        updatedSchool,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteSchool = async (req, res) => {
  try {
    await School.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};
