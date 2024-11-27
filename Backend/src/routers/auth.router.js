// server/routes/auth.js
const express = require("express");
const admin = require("../server/firebaseAdmin");

const router = express.Router();

router.post("/verifyToken", (req, res) => {
  const idToken = req.body.idToken; // ID token from the client

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      res.status(200).send({ message: "User verified", uid });
    })
    .catch((error) => {
      res.status(400).send({ error: "Invalid token" });
    });
});

module.exports = router;
