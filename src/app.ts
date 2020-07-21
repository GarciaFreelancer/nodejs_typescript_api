import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

export class App {
    private express: express.Application;
    private port: 9000;

    constructor(){
        this.express = express();
        this.listen();
        this.middlewares();
        this.database();
    }

    private listen(): void {
        this.express.listen(this.port, () => {
            console.log("Server run in port 9000");
        });
    }

    public getApp(): express.Application {
        return this.express;
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {
        mongoose.connect('mongodb+srv://Dongala92:paulina92@cluster0.3ltdl.mongodb.net/<dbname>?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
}