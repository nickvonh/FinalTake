const router = require("express").Router();
const armRoutes = require("./arms");
const backRoutes = require("./back");
const chestRoutes = require("./chest");
const legRoutes = require("./legs");
const deltRoutes = require("./delts");


/*  
    since this file is already being used at the `/api/` route
    that will be it's base URL – so the routes we use, will take the next sub space in the URL
    for example : armRoutes is the first one we use()

    just to recall – armRoutes is this function:

    router.route("/arms")
        .get(()=>{console.log('arms yo')});

    
    this function is looking for a get request to `/arms`
    

    so since we are inside of the `/api` route – the new route will be `/api/arms`
    etc..

*/

router.use(armRoutes, backRoutes, chestRoutes, legRoutes, deltRoutes, allRoutes);

module.exports = router;