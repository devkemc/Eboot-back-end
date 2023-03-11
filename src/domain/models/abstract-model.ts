import { Entity } from "../i-entity";

export class AbstractModel implements Entity {
  protected _id?: number;
  constructor(i?: number) {
    this._id = i;
  }
}
