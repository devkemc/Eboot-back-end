import {BaseError} from "./base-error";
import {httpStatusCode} from "../http-response/http-status-code";

export class HttpNotFound extends BaseError {
  constructor(message: string) {
    super();
    this._statusCode = httpStatusCode.NOT_FOUND
    this.message =  message
  }
}