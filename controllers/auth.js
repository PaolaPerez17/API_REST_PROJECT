const { models } = require("../database/Conexion_db");
const { compare, encrypt } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");

const login = async (req) => {
  let data;
  let userMa = await models.Manager.findOne({
    where: { email: req.email },
  });
  if (!userMa) {
    data = { err: "Email invalid or ID", code: 401 };
    return data;
  }

  const hashPassword = userMa.get("password");
  const check = await compare(req.password, hashPassword);
  if (!check) {
    data = { err: "password_invalid", code: 401 };
    return data;
  }
  userMa.set("password", undefined, { stric: false });
  data = {
    token: await tokenSign(userMa),
    userMa,
  };
  return { data };
};

const register = async (req) => {
  let data;
  let dataUser;
  let userMa = await models.Manager.findOne({ where: { email: req.email } });

  if (userMa) {
    data = { err: "email existe", code: 400 };
    return data;
  }
  const password = await encrypt(req.password);
  const body = { ...req, password };

  switch (req.role) {
    case "manager":
      dataUser = await models.Manager.create(body);
      break;
    case "studen":
      dataUser = await models.Studen.create(body);
      break;
    default:
      return {
        err: "role not exists",
      };
  }

  dataUser.set("password", undefined, { stric: false });
  data = {
    token: await tokenSign(req),
    userMa: dataUser,
  };
  return { data };
};
module.exports = { register, login };
