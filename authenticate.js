const authenticate = (req, res, next) => {
  const {
    headers: { token }
  } = req;
  console.log(token);
  next();
  // if (token) {
  //   next();
  // }
  // res.status(401).send({ message: 'Unauthorized' });
};

export default authenticate;
