const { body } = require("express-validator");
const { models } = require("../database/Conexion_db");

const userM = models.Path;

const createPath = async (data) => {
  try {
    let resp = await userM.create(data);
    resp = {
      message: "was successfully registered",
      data,
    };
    return resp;
  } catch (error) {
    return {
      path: data.error,
      message: "parameters are not correct",
      code: 400,
    };
  }
};

const updatePath = async (data) => {
  const { id, name, progress, start_date, finish_date } = data;
  const resp = await userM.findOne({ where: { id } });
  if (!resp) {
    return {
      err: "path not found",
      managerid: id,
      code: 404,
    };
  }
  let body = {
    name,
    progress,
    start_date,
    finish_date,
  };
  data = await userM.update(body, { where: { id } });
  if (data[0] === 1) {
    data = {
      path: body,
      message: "item was updated ",
    };
  }
  return data;
};
const getPath = async ({ id }) => {
  const resp = await userM.findOne({ where: { id } });
  if (!resp) {
    return {
      err: " item not found  ",
      pathid: id,
      code: 400,
    };
  }
  return resp;
};
const delatePath = async (data) => {
  const { id } = data;
  const user = await userM.findOne({ where: { id } });
  if (!user) {
    return {
      err: "item does not exist",
      pathid: id,
      code: 404,
    };
  }
  let resp = await userM.destroy({ where: { id } });
  if (resp === 1)
    resp = {
      user: id,
      message: " iten was successfully removed ",
    };
  return resp;
};

module.exports = { getPath, createPath, updatePath, delatePath };
