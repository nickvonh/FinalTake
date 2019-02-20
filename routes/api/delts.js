const router = require("express").Router();
const deltsController = require("../../controllers/deltsController");

// it's important that these routes have unique URLs 
// so that the server can actually differentiate where to route

router.route("/delts")
    .get(deltsController.findAll)
    .post(deltsController.create);

module.exports = router;