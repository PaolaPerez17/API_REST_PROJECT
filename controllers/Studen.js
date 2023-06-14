const { models } = require("../database/Conexion_db");

const userM = models.Studen;

const createStuden = async (data) => {
  try {
    const resp = await userM.create(data);
    return resp;
  } catch (error) {
    console.log(error, "message: unable to register user");
    return {
      message: "data were not inserted correctly ",
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
      err: "user not found",
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
      message: "updated user",
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
      err: "user does not exist",
      studenid: id,
      code: 404,
    };
  }
  let resp = await userM.destroy({ where: { id } });
  if (resp === 1)
    resp = {
      user: id,
      message: " user deleted",
      code: 200,
    };
  return resp;
};

module.exports = { getStuden, updateStuden, createStuden, delateStuden };
