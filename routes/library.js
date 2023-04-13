const router = require("express").Router();
const conn = require("../db/dbconnection");
const authorized = require("../middleware/authorize");
const admin = require('../middleware/admin');
const { body , validationResult} = require("express-validator");
const upload = require("../middleware/uploadimages");
const { query } = require("express");
const util = require("util");
const fs = require("fs");
// Admin  [Create,UPDATE,DELETE]
router.post(
  "", 
  admin,
  upload.single("bookPdf"),
  body("name")
   .isString()
   .withMessage("PLEASE ENTER A VALID NAME")
   .isLength({min:10 })
   .withMessage("bOOK NAME MUST BE MORE THAN 9"),
  body("description")
   .isString()
   .withMessage("PLEASE ENTER A VALID DESCRIPTION")
   .isLength({min:20 })
   .withMessage("bOOK NAME MUST BE MORE THAN 19") ,
  async (req, res) => {
    try{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        if(!req.file){
          return res.status(400).json({
            errors : [{
            msg: "Book PDF is required",
        }]
        });
        }
        const lib = {
          name : req.body.name,
          description : req.body.description,
          pdf_url : req.file.filename,
        }
        const query = util.promisify(conn.query).bind(conn);
        await query("insert into library set ? ",lib);
        res.status(200).json({
          msg : "Library created SuccessFULLy",
        })
    }catch(err){
        console.log(err)
        res.json(500).json(err)
      }
});

router.put(
  "/:id", 
  admin,
  upload.single("bookPdf"),
  body("name")
   .isString()
   .withMessage("PLEASE ENTER A VALID NAME")
   .isLength({min:10 })
   .withMessage("bOOK NAME MUST BE MORE THAN 9"),
  body("description")
   .isString()
   .withMessage("PLEASE ENTER A VALID DESCRIPTION")
   .isLength({min:20 })
   .withMessage("bOOK NAME MUST BE MORE THAN 19") ,
  async (req, res) => {
    try{
    const query = util.promisify(conn.query).bind(conn);
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const library = await query("select * from library where id = ?",[
          req.params.id
        ])
        if(!library[0]){
          res.status(404).json({
            msg : "Not Found"
          })
        }

        const libraryObj = {
          name : req.body.name,
          description : req.body.description
        }
        if(req.file){
          libraryObj.pdf_url = req.file.filename;
          fs.unlinkSync("./upload/" + library[0].pdf_url)
        }

        await query("update library set ? where id = ?",[
          libraryObj,
          library[0].id
        ])
        res.status(200).json({
          msg : "Updated successfully"
        })
    }catch(err){
        console.log(err)
        res.json(500).json(err)
      }
});

router.delete(
  "/:id", 
  admin,
  async (req, res) => {
    try{
        const query = util.promisify(conn.query).bind(conn);
        const library = await query("select * from library where id = ?",[
          req.params.id
        ])
        if(!library[0]){
          res.status(404).json({
            msg : "Not Found"
          })
        }
        fs.unlinkSync("./upload/" + library[0].pdf_url);
        await query("delete from library where id = ?",[
          library[0].id
        ])
        res.status(200).json({
          msg : "DELETED successfully"
        })
    }catch(err){
        console.log(err)
        res.json(500).json(err)
      }
});


// User [get,review]
// LIST
router.get("", async (req, res) => {
  const query = util.promisify(conn.query).bind(conn);
  const library = await query("select * from library");
  library.map((lib) =>{
    lib.pdf_url = "http://" + req.hostname + ":4000/" + lib.pdf_url
  })
  res.status(200).json({
   library
  });
});

// Show Book
router.get("/:id", async (req, res) => {
  const query = util.promisify(conn.query).bind(conn);
  const library = await query("select * from library where id = ?",[
    req.params.id
  ])
  if(!library[0]){
    res.status(404).json({
      msg : "Not Found"
    })
  }
  library.map((lib) =>{
    lib.pdf_url = "http://" + req.hostname + ":4000/" + lib.pdf_url
  })
  res.status(200).json({
   library
  });
});

// Review
router.post("/review", (req, res) => {
  res.status(200).json({
    msg: "reviewed",
  });
});

module.exports = router;
