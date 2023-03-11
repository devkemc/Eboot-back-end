import { response } from "express";
import { Entity } from "../../domain/i-entity";

export class Result {
  private _message!: string;
  private _error!: string;
  private _status!: number;
  private _data!: Entity;

  public get message(): string {
    return this._message;
  }
  public set message(m: string) {
    this._message = m;
  }

  public get error(): string {
    return this._error;
  }

  public set error(e: string) {
    this._error = e;
  }

  public get status(): number {
    return this._status;
  }

  public set status(s: number) {
    this._status;
  }

  public get data(): Entity {
    return this._data;
  }

  public set data(d: Entity) {
    this._data = d;
  }

  public getResultSucess() {
    response
      .status(this._status)
      .json({ message: this._message, data: this.data });
  }
  public getResultFail() {
    response.status(this.status).json({ message: this._error });
  }
}
