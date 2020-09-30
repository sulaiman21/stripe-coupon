const jwt = require("jsonwebtoken");

exports.verify = (req, res, next) => {
  //let token = req.cookies.jwt;
  let token = req.headers.authrization.splite;

  if (!token) {
    return res.status(201).json({ message: "Unauthorized users", error: "" });
  } else {
    let verifyToken = jwt.verify(token[1], process.env.APP_TOKEN_SCERET);
    if (verifyToken) {
      next();
    } else {
      return res.status(201).json({ message: "Unauthorized users", error: "" });
    }
  }
};
