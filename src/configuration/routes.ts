import cors from 'cors';
import express, { Application } from 'express';

export const routesConfiguration = (app: Application) => {
  app.use(express.json());
  app.use(cors());

  /*  All the other routes... */
  // app.use("/auth", auth);
  // app.use("/note", note);
  // app.use("/status", status);
}