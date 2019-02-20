const router = require("express").Router();
const armsController = require("../../controllers/armsController");

// it's important that these routes have unique URLs 
// so that the server can actually differentiate where to route

router.route("/arms")
    .get(armsController.findAll)
    .post(armsController.create);

module.exports = router;