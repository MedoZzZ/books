const router = require("express").Router();
const conn = require("../db/dbconnection");
const { body, validationResult } = require("express-validator");
const util = require("util");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
// LOGIN,REGESTRATION
//LOgin
router.post(
  "/login",
  body("email").isEmail().withMessage("please enter a valid email"),
  body("password")
    .isLength({ min: 8, max: 12 })
    .withMessage("password should be between (8-12) character"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const query = util.promisify(conn.query).bind(conn);
      const user = await query("select * from users where email = ?", [
        req.body.email,
      ]);
      if (user.length == 0) {
        res.status(404).json({
          errors: [
            {
              msg: "email or pass not found",
            },
          ],
        });
      } else {
        const checkpassword = await bcrypt.compare(
          req.body.password,
          user[0].password
        );
        if (checkpassword) {
          delete user[0].password;
          res.status(200).json(user[0]);
        } else {
          res.status(404).json({
            errors: [
              {
                msg: "pass is wrong",
              },
            ],
          });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: err });
    }
  }
);

// Registration
router.post(
  "/register",
  body("email").isEmail().withMessage("please enter a valid email"),
  body("name")
    .isString()
    .withMessage("please enter a valid name")
    .isLength({ min: 10, max: 20 })
    .withMessage("name should be between (10-20) character"),
  body("password")
    .isLength({ min: 8, max: 12 })
    .withMessage("password should be between (8-12) character"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const query = util.promisify(conn.query).bind(conn);
      const checkEmail = await query("select * from users where email = ?", [
        req.body.email,
      ]);
      if (checkEmail.length > 0) {
        res.status(400).json({
          errors: [
            {
              msg: "email already exist",
            },
          ],
        });
      } else {
        const userData = {
          name: req.body.name,
          email: req.body.email,
          password: await bcrypt.hash(req.body.password, 10),
          token: crypto.randomBytes(16).toString("hex"),
        };
        await query("insert into users set ? ", userData);
        delete userData.password;
        res.status(200).json(userData);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: err });
    }
  }
);

module.exports = router;
