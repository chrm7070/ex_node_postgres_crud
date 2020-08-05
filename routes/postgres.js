var express = require("express");
var router = express.Router();

router.get("/test", function (req, res, next) {
    res.send({ 1: 1 });
});

module.exports = router;
