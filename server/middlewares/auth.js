const authenticate = (req, res, next) => {
  const {
    headers: { token },
  } = req;
  console.log(token);
  next();
};

export default authenticate;
