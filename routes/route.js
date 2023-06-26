const { StudentData } = require("../Controllers/studentController");

const router= require("express").Router();

router.post("/submit",StudentData)

module.exports=router