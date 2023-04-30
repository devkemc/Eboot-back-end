import {Entity} from "../../../domain/interfaces/i-entity";

export abstract class BaseError extends Error {
    protected _statusCode!: number;

    get statusCode() {
        return this._statusCode
    }

}
