import { Entity } from "../interfaces/i-entity";

export class AbstractEntity implements Entity {
  protected _id?: number;
  constructor(i?: number) {
    this._id = i;
  }
  get id(): number | undefined {
    return this._id;
  }
}
