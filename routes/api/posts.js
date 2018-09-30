const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "This will have the posts workss" });
});

module.exports = router;
