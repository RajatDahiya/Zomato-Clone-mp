// ENV var
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Database Connection
import ConnectDB from "./database/connection";

const zomato = express();


//application  middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/", (req, res) => res.json( { message : "Setup Success" } ));

zomato.listen(4000, () => 
   ConnectDB().then(() => console.log("server running"))
   .catch(() => console.log("Server running but DB connection failed..."))
);