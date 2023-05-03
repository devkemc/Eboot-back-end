import {BaseError} from "./base-error";
import {httpStatusCode} from "../http-response/http-status-code";

export class HttpBadRequest extends BaseError {
  constructor(message: string) {
    super();
    this._statusCode = httpStatusCode.BAD_REQUEST
    this.message =  message
  }
}