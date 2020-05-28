const School = require('../models/schoolModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createSchool = catchAsync(async (req, res) => {
  const newSchool = await School.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      school: newSchool,
    },
  });
});

exports.getAllSchool = catchAsync(async (req, res) => {
  const schools = await School.find();
  res.status(200).json({
    status: 'success',
    results: schools.length,
    data: {
      schools,
    },
  });
});

exports.getSchool = catchAsync(async (req, res, next) => {
  const school = await School.findById(req.params.id);

  if (!school) {
    return next(new AppError('No tour found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      school,
    },
  });
});

exports.updateSchool = catchAsync(async (req, res, next) => {
  const updatedSchool = await School.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedSchool) {
    return next(new AppError('No tour found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      updatedSchool,
    },
  });
});

exports.deleteSchool = catchAsync(async (req, res, next) => {
  const school = await School.findByIdAndDelete(req.params.id);

  if (!school) {
    return next(new AppError('No tour found with that id', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
