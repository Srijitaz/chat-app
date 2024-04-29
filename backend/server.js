
import express from "express";
import dotenv from "dotenv" ;
import cookieParser from "cookie-parser";


import authroutes from "./routes/authroutes.js";
import messageroutes from "./routes/messageroutes.js";
import userroutes from "./routes/userroutes.js";


import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth" ,  authroutes);
app.use("/api/messages" ,  messageroutes);
app.use("/api/users" ,  userroutes);
// app.get("/", (req, res)=> {
//     //root route locahost
//     res.send("Hello World!!");
// });


app.listen(PORT, () =>{ 
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});

