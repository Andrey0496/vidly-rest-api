
import httpStatus from 'http-status-codes';
import ApplicationError from '../../../util/errors/ApplicationError';

class GenreNotFoundError extends ApplicationError {
  constructor(message) {
    super(
      httpStatus.NOT_FOUND
      , message || 'No genre found with that id'
      , true
    );
  }
}

export default GenreNotFoundError;
