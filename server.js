let express = require('express');
var cors = require('cors')
const bodyParser = require("body-parser");
let nodemailer = require('nodemailer');
const path = require('path');

let app = express();
const router = express.Router();
require('dotenv').config();

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })    
);
app.use(bodyParser.json());

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

let transporter = nodemailer.createTransport({
  service: "Gmail", 
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD 
  },
});

// verifying the connection configuration
// transporter.verify(function(error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages!");
//   }
// });


router.post('/access', (req, res, next) => {
  var data = req.body;
  var content = `name: ${data.name} \n address: ${data.address} `

  var mail = {
    from: "name", 
    to: "name", 
    message: content,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      console.log('data', data)
      res.json({
       status: 'success'
      })
    }
  })
})

app.use('/api', router)
// serve PORT running here
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))