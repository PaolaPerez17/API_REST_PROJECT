const { models } = require("../database/Conexion_db");

const userM = models.Issue;

const createIssue = async (data) => {
  try {
    let resp = await userM.create(data);
    resp = {
      message: " issue is recorded",
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

const getIssue = async ({ id }) => {
  const resp = await userM.findOne({ where: { id } });
  if (!resp) {
    return {
      err: " issue not found",
      issueid: id,
      code: 400,
    };
  }
  return resp;
};

const updateIssue = async (data) => {
  const { id, name, complete, finish_date, content } = data;
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
    complete,
    finish_date,
    content,
  };
  data = await userM.update(body, { where: { id } });
  if (data[0] === 1) {
    data = {
      issue: body,
      message: "item has been updated ",
    };
  }
  return data;
};

const deleteIssue = async (data) => {
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
      message: " item was deleted",
    };
  return resp;
};
module.exports = { getIssue, createIssue, updateIssue, deleteIssue };
