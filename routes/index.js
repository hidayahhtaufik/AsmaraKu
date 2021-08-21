const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/index.js");

router.get("/fetch", Controllers.fetchCorona);
// router.get("/covid/:id", Controllers.findOne);
router.post("/post", Controllers.postCorona);
// router.put("/covid/:id", Controllers.edit);
// router.delete("/covid/:id", Controllers.delete);

module.exports = router;
