
const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, utilisateur) => {
      if (err) res.status(403).json("Token pas valid");
      req.utilisateur = utilisateur;
      next();
    });
  } else {
    return res.status(401).json("Pas autorise");
  }
}

module.exports = verify;