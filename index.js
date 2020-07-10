const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json({limit: '10mb', extended: true}));

app.listen(port, () => console.log(`Listening on port ${port}`));

/* API responsible for logging in the user  */
app.post('/logInUser' , (req, res) => {
    let userExist = false;
    let userId;
    fs.readFile("./data-files/usersData.json" , (err, data) => {
        let dataArray = JSON.parse(data);
        let hashPwd = crypto.createHash('sha1').update(req.body.password).digest('hex');
        let x = dataArray.filter((el) => 
            el.username === req.body.username &&
                el.password === hashPwd
          );
        x.length === 1 ?
        res.send({userExist : true, userId: x[0].userId})
        :
        res.send({userExist : false, userId: "" });
    });
});

/* API responsible for registering / signing up a new user */
app.post('/signUpUser', (req, res) => {
    let newUser = {
      username: req.body.username,
      userId : makeUserId(),
      password: crypto.createHash('sha1').update(req.body.password).digest('hex'),
      userDetails : {
        name : "",
        age : "",
        gender : ""
    },
    wishlist : [],
    cart : []
    }
    fs.readFile('./data-files/usersData.json', (err, data) => {
      let dataArray = JSON.parse(data);
      dataArray.push(newUser);
      fs.writeFile("./data-files/usersData.json", JSON.stringify(dataArray), function(err){
        if (err) throw err;
        console.log('The user was sucessfully registered ');
        res.send({userRegistered: true})
      });
    });
  });

  /* API responsible for sending misc product data */
  app.get('/getNewProducts' , (req, res) => {
    fs.readFile('./data-files/productsData.json', (err, data) => {
      let dataArray = JSON.parse(data);
      let responseObject = {
        newProducts: [],
        topProducts: [],
        saleProducts: [],
      }
      responseObject.newProducts = dataArray.filter((el) => 
        el.highlights === "new product"
      );
      if(responseObject.newProducts.length > 6){
        responseObject.newProducts.splice(6, responseObject.newProducts.length - 1 )
      }
      responseObject.topProducts = dataArray.filter((el) => 
        el.highlights === "top product"
      );
      if(responseObject.topProducts.length > 3){
        responseObject.topProducts.splice(3, responseObject.topProducts.length - 1 )
      }
      responseObject.saleProducts = dataArray.filter((el) => 
        el.highlights === "sale product"
      );
      if(responseObject.saleProducts.length > 3){
        responseObject.saleProducts.splice(3, responseObject.saleProducts.length - 1 )
      }
      res.send({responseObject : responseObject})
    });
  })

/* Generates unique id for a new user */
function makeUserId(){
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for(let i = 0; i < 12; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}