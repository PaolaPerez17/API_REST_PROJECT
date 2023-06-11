const { matchedData } = require("express-validator");
const { models } = require("../database/Conexion_db");

const getIssue = async (req, res) => {
  try {
    const issue = req.user;
    const data = await models.Issue.find({});
    res.send({ data, issue });
  } catch (error) {
    console.log("message: no se puede obtener la issue", error);
  }
};
const getIssues = (req, res) => {};

const createIssue = async (req, res) => {
  try {
    const body = matchedData(req);
    const { name, completed, finish_date,content } = body;
    const data = await models.Issue.create(body, {
      name,
      completed,
      finish_date,
      content
    });
    res.send({ data });
  } catch (error) {
    console.log("message: no se pudo crear la issue", error);
  }
};
const updateIssue = (req, res) => {};
const deleteIssue = (req, res) => {};

module.exports = { getIssue, getIssues, createIssue, updateIssue, deleteIssue };
