 //  ********************** INITIALIZE EPRESS APP ******************** 
 const express = require('express');
 const app = express(); 

  //  ********************** GLOBAL MIDELWARE ******************** 

  app.use(express.json());
  app.use(express.urlencoded({extended : true}));
  app.use(express.static ('upload'));
  const cors = require("cors");
  app.use(cors());


  //  ********************** Required Module ******************** 

  const auth = require("./routes/Auth");
  const library = require("./routes/library");

//  **********************  RUN THE APP ******************** 

app.listen(4000,'localhost',() =>{
    console.log('SERVER IS RUNNING');
})


//  **********************  API ROUTES [ ENDPOINTS ] ******************** 

app.use("/auth",auth);
app.use("/library",library);
