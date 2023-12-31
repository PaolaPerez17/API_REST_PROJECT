const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/sesion")

const {
  getStuden,
  createStuden,
  updateStuden,
  delateStuden,
} = require("../controllers/Studen");

router.get("/:id", authMiddleware,async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await getStuden(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
      studenid: data.studenid,
    };
  }
  res.json(data);
});

router.post("/", authMiddleware,async (req, res) => {
  let data = await createStuden(req.body);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
    };
  }
  res.json(data);
});
router.put("/:id",authMiddleware, async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await updateStuden(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
    };
  }
  res.json(data);
});

router.delete("/:id", authMiddleware,async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await delateStuden(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
      studenid: data.studenid,
    };
  }
  res.json(data);
});

module.exports = router;
