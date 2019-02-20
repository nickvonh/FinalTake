const router = require("express").Router();
const legsController = require("../../controllers/legsController");

// it's important that these routes have unique URLs 
// so that the server can actually differentiate where to route

router.route("/legs")
    .get(legsController.findAll)
    .post(legsController.create);

module.exports = router;