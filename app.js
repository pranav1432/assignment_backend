require('dotenv').config();
const express=require("express");
const cors=require("cors");
 
const cookieParser = require("cookie-parser");
const { userrouter } = require("./Routes/userRoutes");
const { taskrouter } = require("./Routes/taskRoutes");
const { ConnectDataBase } = require('./models/db');
const { sprintrouter } = require('./Routes/sprintRoutes');

const app=express();
app.use(express.json());
app.use(cors());
 
app.use(cookieParser());

app.use("/api",userrouter);
app.use("/api",taskrouter);
app.use("/api",sprintrouter);



const PORT=3001;

ConnectDataBase().then(()=>{

    app.listen(PORT,()=>{

     console.log(`server is listening at http://localhost:${PORT}`);
       
       })

})




