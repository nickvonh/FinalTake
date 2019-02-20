const router = require("express").Router();
const armsController = require("../../controllers/armsController");

router.route("/exercise")
    .get(armsController.findAll)
    .post(armsController.create);

module.exports = router;