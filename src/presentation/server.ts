import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";
import cors from "cors";


import {routes} from "./routes";
import {BaseError} from "./utils/errors/base-error";

const app = express();

//const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
    (err: BaseError, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof BaseError) {
            return response.status(err.statusCode).json({
                status: err.statusCode,
                error: err.message,
                data: err.data
            });
        }

        return response.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
);

app.listen(3000);
