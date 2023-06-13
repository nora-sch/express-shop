const express = require("express");
const router = express.Router();
const dbConnection = require("../database/connection");

const getAll = 'SELECT * FROM users'
const getOne = 'SELECT * FROM users WHERE id=?'

// ROUTE "/"
router.get("/", (req, res) => {
     dbConnection.query(   
        getAll, (err, result, fields) => {
        if (!err) {
           res.status(200).json(result);
        } else {
          res.status(500).send("Error saving the user");
        }
      }
    );
  });

// ROUTE "/:id"
  router.get("/:id", (req, res) => {
    dbConnection.query(   
       getOne, [req.params.id], (err, result, fields) => {
       if (!err) {
        if (result.length > 0) {
            res.status(200).json(result);
          } else {
            res.status(400).json({message:'USER NOT FOUND'});
          }
       } else {
         res.status(500).send("Error saving the user");
       }
     }
   );
 });

module.exports = router;