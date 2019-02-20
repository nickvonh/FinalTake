const router = require("express").Router();
const chestController = require("../../controllers/chestController");

// it's important that these routes have unique URLs 
// so that the server can actually differentiate where to route

router.route("/chest")
    .get(chestController.findAll)
    .post(chestController.create);

module.exports = router;