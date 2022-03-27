import Express from "express";
import dotenv from "dotenv";
import bootcamps from "./routes/bootcamps.js";

//load env file
dotenv.config({path: "./config/config.env"});

const PORT = process.env.PORT;

const app = Express();

app.use('/api/v1/bootcamps', bootcamps);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}).on("error", err => {
    console.log(err);
}).on("listening", () => {
    console.log(`Server running on port ${PORT}`);
}).on("close", () => {
    console.log("Server closed");
});



