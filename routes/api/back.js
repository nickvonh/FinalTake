const router = require("express").Router();
const backController = require("../../controllers/backController");

// it's important that these routes have unique URLs 
// so that the server can actually differentiate where to route

router.route("/back")
    .get(backController.findAll)
    .post(backController.create);

module.exports = router;