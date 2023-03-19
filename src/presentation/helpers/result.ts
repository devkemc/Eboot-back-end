import { Response } from "express";
import { Entity } from "../../domain/interfaces/i-entity";
import { HttpResponse } from "../protocols/http";

export class Result implements Entity {
  private _message!: string;
  private _error!: string;
  private _status!: number;
  private _data!: Entity[] | Entity;
  private _res!: Response;

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
    this._status = s;
  }

  public get data(): Entity[] | Entity {
    return this._data;
  }

  public set data(d: Entity[] | Entity) {
    this._data = d;
  }

  public getResult(): HttpResponse {
    const succes = {
      statusCode: this._status,
      message: this._message,
      data: this._data,
    };
    const err = {
      statusCode: this._status,
      message: this._error,
      data: this._data,
    };
    return this._error ? err : succes;
  }
}
