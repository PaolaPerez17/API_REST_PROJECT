const { verifyToken } = require("../utils/handleJwt");
const { models } = require("../database/Conexion_db");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.json({
        message: "REQUIRE_TOKEN",
        code: 401,
      });
      return false;
    }
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);

    if (!dataToken.id) {
      res.json({
        message: "REQUIRE_ID_TOKEN",
        code: 401,
      });
      return false;
    }

    let user = await models.Manager.findByPk(dataToken.id);
    console.log(user);
    if (!user) {
      user = await models.Studen.findByPk(dataToken.id);
    }
    req.user = user;

    next();
  } catch (e) {
    console.error(e.message);
    res.json({
      message: "NOT_SESSION",
      code: 401,
    });
  }
};

module.exports = authMiddleware;
