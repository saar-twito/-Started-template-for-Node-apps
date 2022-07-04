"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongoose = () => {
    mongoose_1.default.connect(process.env.MONGODB_CONNECTION)
        .then(() => console.log("MongoDB is up and running!"))
        .catch(() => console.log("MongoDB is down..."));
};
exports.connectMongoose = connectMongoose;
