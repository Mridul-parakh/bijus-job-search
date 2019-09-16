const express=require('express');
const app=express();
const path = require('path');
// const mongoose=require('mongoose');
// const db=require('./config/keys').mongoUrl;
const bodyParser=require('body-parser');
// const fetch = require('node-fetch');
var cors = require('cors');
const axios=require('axios');
// const Bluebird = require('bluebird');
// fetch.Promise = Bluebird;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 app.use(cors());


 
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
// });

// mongoose.connect(db,{
//     useNewUrlParser: true
//   })
//   .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

app.get('/',(req,res)=>{
  axios.get('https://nut-case.s3.amazonaws.com/jobs.json')
  .then(re=>{
  
    //console.log(JSON.stringify(re.data.data));
    return res.json(re.data.data);
  });

  

})

app.get('/expire',(req,res)=>{
  axios.get('https://nut-case.s3.amazonaws.com/jobs.json')
  .then(re=>{

    console.log(JSON.stringify(re.data.data));
    return res.json(re.data.data);
  });

  

})

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const port=process.env.PORT||5000;


app.listen(port,()=>{
    console.log(`server connected at ${port}`);
});