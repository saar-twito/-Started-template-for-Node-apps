"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesConfiguration = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routesConfiguration = (app) => {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    /*  All the other routes... */
    // app.use("/auth", auth);
    // app.use("/note", note);
    // app.use("/status", status);
};
exports.routesConfiguration = routesConfiguration;
