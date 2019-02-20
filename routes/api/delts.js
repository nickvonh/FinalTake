const router = require("express").Router();
const deltsController = require("../../controllers/deltsController");

router.route("/exercise")
    .get(deltsController.findAll)
    .post(deltsController.create);

module.exports = router;