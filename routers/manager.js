const express = require("express");
const router = express.Router();
const {
    getManager,
    getManagers,
    createManager,
    updateManager,
    delateManager,
} = require("../controllers/Manager");

router.get("/:id", getManager);
router.post("/", createManager);
router.put("/:id", updateManager );
router.delete("/:id", delateManager);

module.exports = router