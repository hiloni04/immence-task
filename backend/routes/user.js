const {Router} = require("express");

const {createUser} = require("../controller/createUser")
const { getUser } = require("../controller/getUser");

const router = Router();

router.get("/", getUser)
router.post("/createUser", createUser)

module.exports = router;