const authenticate = (req, res, next) => {
  next();
  // const {
  //   headers: { token }
  // } = req;
  // if (token) {
  //   next();
  // }
  // res.status(401).send({ message: 'Unauthorized' });
};

export default authenticate;
