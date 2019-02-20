const router = require("express").Router();
const backController = require("../../controllers/backController");

router.route("/exercise")
    .get(backController.findAll)
    .post(backController.create);

module.exports = router;