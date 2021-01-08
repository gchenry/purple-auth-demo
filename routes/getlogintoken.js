var express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
var router = express.Router();
var app = express();
var admin = require('firebase-admin');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var currentFolder = path.dirname(__filename);
var keyFilePath = path.resolve(currentFolder, '../google.com_lensdemos-2cdac21c1806.json');
var serviceAccount = require(keyFilePath); 
// Providing a service account object inline
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



/* Submit uid to get login token */
router.post('/:uid', (request, response) => {
    //code to perform particular action.

    //To access POST variable use req.body()methods.
    var uid = request.body.uid;
    console.log('We got called son with id ' + uid + '!');
    admin
        .auth()
        .createCustomToken(uid)
        .then((customToken) => {
            // Send token back to client
             response.json({ token: customToken });
        })
        .catch((error) => {
            console.log('Error creating custom token:', error);
        });   
   
});
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a login resource');
});
module.exports = router;