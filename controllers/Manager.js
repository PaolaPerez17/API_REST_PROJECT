const { matchedData } = require("express-validator");
const { models } = require("../database/Conexion_db");

const getManager = (req, res) => {};
const getManagers = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await models.Manager.create(body);
    res.send({ data });
  } catch (error) {
    console.log("message: message", error);
  }
};
const createManager = async (req, res) => {
  try {
    const body = matchedData(req);
    const { id, name, lastname, email, brithdate, password } = body;
    const data = await models.Manager.create(body);
    res.send({ data });
  } catch (error) {
    console.log("message: no se puede reguistar user", error);
  }
};
const updateManager = (req, res) => {};
const delateManager = (req, res) => {};

module.exports = {
  getManager,
  getManagers,
  createManager,
  updateManager,
  delateManager,
};
