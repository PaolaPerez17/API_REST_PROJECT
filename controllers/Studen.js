const { models } = require("../database/Conexion_db");

const userM = models.Studen;

const createStuden = async (data) => {
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

const updateStuden = async (data) => {
  const { id, name, lastname, brithdate, password } = data;
  const resp = await userM.findOne({ where: { id } });
  if (!resp) {
    return {
      err: "Manager not found",
      studeid: id,
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

const getStuden = async ({ id }) => {
  const resp = await userM.findOne({ where: { id } });
  if (!resp) {
    return {
      err: " Manager no encontrado",
      studenid: id,
      code: 400,
    };
  }
  return resp;
};

const delateStuden = async (data) => {
  const { id } = data;
  const user = await userM.findOne({ where: { id } });
  if (!user) {
    return {
      err: "Manager no existe",
      studenid: id,
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

module.exports = { getStuden, updateStuden, createStuden, delateStuden };
