const router = require("express").Router();
const legsController = require("../../controllers/legsController");

router.route("/exercise")
    .get(legsController.findAll)
    .post(legsController.create);

module.exports = router;