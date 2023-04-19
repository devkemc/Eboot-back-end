import {BaseError} from "./base-error";
import {httpStatusCode} from "../http-response/http-status-code";
import {Entity} from "../../../domain/interfaces/i-entity";

export class HttpUnauthorized extends BaseError {
    constructor(data: Entity) {
        super();
        this._statusCode = httpStatusCode.UNAUTHORIZED
        this._data = data
        this.message = 'Unathorized'
    }
}