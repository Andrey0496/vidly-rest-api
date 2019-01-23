class ApplicationError extends Error {

  constructor(httpCode, message, isOperational){
    super()
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.httpCode = httpCode;
    this.message = message;
    this.isOperational = isOperational;
  }

}

export default ApplicationError;
