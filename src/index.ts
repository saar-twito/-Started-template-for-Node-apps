import express, { Application, Request, Response } from 'express';
import { connectMongoose } from './configuration/db';
import { routesConfiguration } from './configuration/routes';
import dotenv from 'dotenv';

dotenv.config(); // => Loads .env file contents into process.env.

const app: Application = express(); // => Setup an express instance.
const port = process.env.PORT; // => Get the port number 

connectMongoose(); // => Connect to MongoDB 
routesConfiguration(app); //> Prepare routes configuration


// => Default route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// => Setup express server
app.listen(port, () => console.log("Server up and running!"));
