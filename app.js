const express = require('express');

const AppError = require('./utils/appError');
const userRouter = require('./routes/userRouter');
const schoolRouter = require('./routes/schoolRouter');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// Middlewares stack
app.use(express.json());

// All the basic resources routes
app.use('/api/v1/schools', schoolRouter);
app.use('/api/v1/users', userRouter);

// ERROR HANDLING
// step 1 -> Handling all the unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

// step2 --> Creating a custom error handling class

// step3 --> creating a global error handling middleware

app.use(globalErrorHandler);

module.exports = app;
