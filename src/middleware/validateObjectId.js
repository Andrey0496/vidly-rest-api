import httpStatus from 'http-status-codes';
import ApplicationError from '../util/errors/ApplicationError';

const mongoose = require('mongoose');

export default (req, _, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)){
    throw new ApplicationError(httpStatus.NOT_FOUND, 'Invalid ID', true);
  }

  next();
};
