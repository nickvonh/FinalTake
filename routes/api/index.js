const router = require("express").Router();
const armRoutes = require("./arms");
const backRoutes = require("./back");
const chestRoutes = require("./chest");
const legRoutes = require("./legs");
const deltRoutes = require("./delts");

router.use("/exercise", armRoutes, backRoutes, chestRoutes, legRoutes, deltRoutes);

module.exports = router;