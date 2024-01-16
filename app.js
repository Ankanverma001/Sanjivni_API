import Express from "express";
import bodyParser from "body-parser";
import login from "./routes/login.js";
import user from "./routes/fetchData.js";
import updatedata from "./routes/updateData.js";
import cors from 'cors';

const app= Express();
const port=8000;

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
};
  
app.use(cors(corsOptions));


app.use(bodyParser.urlencoded({extended:true}));
app.use(Express.json());

app.use("/",login);
app.use("/user",user);
app.use("/update",updatedata);

app.listen(port,()=>{
    console.log(`Server listening on port: ${port}`);
})
