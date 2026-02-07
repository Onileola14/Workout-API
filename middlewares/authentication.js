const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  // const authHeader = req.headers.authorizations;
  const authHeader = req.headers.authorization;
  // console.log(req.headers);
  // console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  // console.log(token);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { name: payload.name, userId: payload._id };

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = authentication;
