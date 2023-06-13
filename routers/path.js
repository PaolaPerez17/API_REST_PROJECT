const express = require("express");
const router = express.Router();
const {
  getPath,
  createPath,
  updatePath,
  delatePath,
} = require("../controllers/Path");

router.post("/", async (req, res) => {
  let data = await createPath(req.body);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
    };
  }
  res.json(data);
});

router.put("/:id", async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  console.log(params, "xd");
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await updatePath(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
    };
  }
  res.json(data);
});

router.get("/:id", async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await getPath(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
      pathid: data.pathid,
    };
  }
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  let params = Object.assign({}, req.body, req.query, req.params);
  if (req.params.id) {
    params.id = req.params.id;
  }
  let data = await delatePath(params);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
      pathid: data.pathid,
    };
  }
  res.json(data);
});

module.exports = router;
