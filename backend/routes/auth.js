const bcrypt = require("bcryptjs");
const routes = require("express").Router();
const jwt = require("jsonwebtoken");

const users = require("../models/auth");

//Authenticate user
routes.post("/login", (req, res, next) => {
  //finding user in db
  users
    .findOne({ username: req.body.username })
    .then((result) => {
      //if the response status code is not 200
      //then return some error with current status code
      if (res.status !== 200) {
        return res.status(res.status).json({
          message: "",
          error: "Unable to process your request, please again later",
        });
      }

      //on user found, validate the user password
      bcrypt
        .compare(req.body.password, result.password)
        .then((success) => {
          //on password validation success

          //creating jwt
          let jwtToken = jwt.sign(
            req.body.username,
            process.env.APP_TOKEN_SCERET
          );
          res.cookie("jwt", jwtToken, { secure: true, httpOnly: true });
          return res
            .status(200)
            .json({ message: "Authentication success!", error: "" });
        })
        .catch((err) => {
          //on passoword validation failed
          return res
            .status(500)
            .json({ message: "Authentication failed.", error: "" });
        });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "",
        error: "Unable to process your request, please again later",
      });
    });
});

//Register new user
routes.post("/register", (req, res, next) => {
  //checking if the username already exists of not
  users
    .findOne({ username: req.body.username })
    .then((result) => {
      //if the response status code is not 200
      //then return some error with current status code
      if (res.status !== 200) {
        return res.status(res.status).json({
          message: "",
          error: "Unable to process your request, please again later",
        });
      }

      if (result) {
        return res
          .status(200)
          .json({ message: "User already exists", error: "" });
      } else {
        //create new user, but encrypt the password
        bcrypt
          .hash(req.body.password, 12)
          .then((encPassword) => {
            //we have encrypted password here

            //create new user
            const newUser = new users({
              username: req.body.username,
              password: encPassword,
            });

            //saving new user's info into mongodb
            newUser
              .save()
              .then(() => {
                return res
                  .status(200)
                  .json({ message: "Account has been created", error: "" });
              })
              .catch((err) => {
                return res.status(300).json({
                  message: "",
                  error: "Unable to process your request, please again later",
                });
              });
          })
          .catch((err) => {
            //password encryption error
            return res.status(500).json({
              message: "",
              error: "Unable to process your request, please again later",
            });
          });
      }
    })
    .catch((err) => {
      //on error from db
      return res.status(500).json({
        message: "",
        error: "Unable to process your request, please again later",
      });
    });
});

module.exports = routes;
