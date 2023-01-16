const router = require("express").Router();
const controller = require("../controller/userController")

router.get("/",controller.all_Data);
router.get("/:userId",controller.singlel_Data);
router.post("/post",controller.add_single_Data);
router.put("/update:userId",controller.edit_single_Data);
router.delete("/:userId");
module.exports = router;