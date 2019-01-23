export default async (err, _, res, next) => {
  const { isOperational } = err;
  if( isOperational ) {
    const { httpCode, message, name } = err;
    res.status(httpCode).json({ name, message })
  }else {
    next(err);
  }
};
