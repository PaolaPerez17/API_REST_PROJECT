const { models } = require("../database/Conexion_db");

const userM = models.Manager;

const createManager = async (data) => {
  try {
    const resp = await userM.create(data);
    return resp;
  } catch (error) {
    console.log(error, "message: no se puede reguistar user");
    return {
      message: "no se insertaron correctamente los datos",
      err: error.message,
      code: 400,
    };
  }
};

const updateManager = async (data) => {
  const { id, name, lastname, brithdate, password } = data;
  const resp = await userM.findOne({ where: { id } });
  if (!resp) {
    return {
      err: "Manager not found",
      managerid: id,
      code: 404,
    };
  }
  let body = {
    name,
    lastname,
    brithdate,
    password,
  };
  data = await userM.update(body, { where: { id } });
  if (data[0] === 1) {
    data = {
      user: body,
      message: "se actualizo el registro ",
      code: 200,
    };
  }
  return data;
};

const getManager = async ({ id }) => {
  const resp = await userM.findOne({ where: { id } });
  if (!resp) {
    return {
      err: " Manager no encontrado",
      managerid: id,
      code: 400,
    };
  }
  return resp;
};

const delateManager = async (data) => {
  const { id } = data;
  const user = await userM.findOne({ where: { id } });
  if (!user) {
    return {
      err: "Manager no existe",
      managerid: id,
      code: 404,
    };
  }
  let resp = await userM.destroy({ where: { id } });
  if (resp === 1)
    resp = {
      user: id,
      message: " se borro",
      code: 200,
    };
  return resp;
};

module.exports = {
  getManager,
  createManager,
  updateManager,
  delateManager,
};
