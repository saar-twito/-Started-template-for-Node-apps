"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./configuration/db");
const routes_1 = require("./configuration/routes");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // => Loads .env file contents into process.env.
const app = (0, express_1.default)(); // => Setup an express instance.
const port = process.env.PORT; // => Get the port number 
(0, db_1.connectMongoose)(); // => Connect to MongoDB 
(0, routes_1.routesConfiguration)(app); //> Prepare routes configuration
// => Default route for testing
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
// => Setup express server
app.listen(port, () => console.log("Server up and running!"));
