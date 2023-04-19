import {Entity} from "../../../domain/interfaces/i-entity";

export abstract class BaseError extends Error {
    protected _statusCode!: number;
    protected _data!: Entity;

    get statusCode() {
        return this._statusCode
    }

    get data() {
        return this._data
    }

}
