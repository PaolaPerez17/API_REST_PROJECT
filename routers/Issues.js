const express = require("express");
const router = express.Router();
const {
  getIssue,
  getIssues,
  createIssue,
  updateIssue,
  deleteIssue,
} = require("../controllers/Issue");

router.get("/:id", getIssue);
router.post("/", createIssue);
router.put("/:id", updateIssue);
router.delete("/:id", deleteIssue);
module.exports = router