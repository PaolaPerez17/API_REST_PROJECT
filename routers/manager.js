const express = require("express");
const router = express.Router();
const authMiddleware  = require("../middleware/sesion");


const {
  getManager,
  createManager,
  updateManager,
  delateManager,
} = require("../controllers/Manager");

router.get("/:id",authMiddleware, async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await getManager(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
      managerid: data.managerid,
    };
  }
  res.json(data);
});

router.post("/", authMiddleware,async (req, res) => {
  let data = await createManager(req.body);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
    };
  }
  res.json(data);
});
router.put("/:id", authMiddleware,async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await updateManager(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
    };
  }
  res.json(data);
});

router.delete("/:id",authMiddleware ,async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await delateManager(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
      managerid: data.managerid,
    };
  }
  res.json(data);
});

module.exports = router;
