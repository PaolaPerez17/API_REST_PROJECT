const express = require("express");
const router = express.Router();
const authMiddleware  = require("../middleware/sesion");
const {
  getIssue,
  createIssue,
  updateIssue,
  deleteIssue,
} = require("../controllers/Issue");

router.post("/", authMiddleware, async (req, res) => {
  let data = await createIssue(req.body);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
    };
  }
  res.json(data);
});

router.get("/:id",authMiddleware, async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await getIssue(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
      managerid: data.managerid,
    };
  }
  res.json(data);
});
router.put("/:id",authMiddleware, async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await updateIssue(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
    };
  }
  res.json(data);
});

router.delete("/:id",authMiddleware, async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await deleteIssue(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
      issueid: data.issueid,
    };
  }
  res.json(data);
});

module.exports = router;
