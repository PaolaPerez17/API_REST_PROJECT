const { matchedData } = require("express-validator");
const Manager = require("../models/Manager");

const getManager = (req, res) => {};
const getManagers = async(req, res) => {
  try {
    const body = matchedData(req)
    const data = await Manager.create(body)
    res.send({data})
  } catch (error) {
    console.log('message: message',error)
  }
};
const createManager = (req, res) => {
  
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
