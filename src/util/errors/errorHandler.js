
export default async (err) => {
  // log error
  // sendMailIfCritical
  console.log(err);
  return err.isOpertional === true;
}
