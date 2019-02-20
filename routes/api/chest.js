const router = require("express").Router();
const chestController = require("../../controllers/chestController");

router.route("/exercise")
    .get(chestController.findAll)
    .post(chestController.create);

module.exports = router;