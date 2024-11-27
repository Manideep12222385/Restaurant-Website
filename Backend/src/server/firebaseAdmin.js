// server/firebaseAdmin.js
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK (Use your service account key)
admin.initializeApp({
  credential: admin.credential.cert(require("./serviceAccountKey.json")),
  databaseURL: "https://kanishka-dhaba.firebaseio.com",
});

module.exports = admin;
