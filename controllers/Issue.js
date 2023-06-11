const { matchedData } = require("express-validator");
const Issue = require("../models/Issue");

const getIssue = async (req, res) => {
  try {
    const issue = req.user;
    const data = await Issue.find({});
    res.send({ data, issue });
  } catch (error) {
    console.log("message: no se puede obtener la issue", error);
  }
};
const getIssues = (req, res) => {};

const createIssue = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await Issue.create(body);
    res.send({ data });
  } catch (error) {
    console.log("message: no se pudo crear la issue", error);
  }
};
const updateIssue = (req, res) => {};
const deleteIssue = (req, res) => {};

module.exports = { getIssue, getIssues, createIssue, updateIssue, deleteIssue };
