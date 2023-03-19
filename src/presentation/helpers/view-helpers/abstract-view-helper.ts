import { json } from "express";
import { AbstractEntity } from "../../../domain/entities/abstract-entity";
import { Entity } from "../../../domain/interfaces/i-entity";

export abstract class AbstractViewHelper {
  private _clazz: AbstractEntity;
  constructor(clazz: AbstractEntity) {
    this._clazz = clazz;
  }
  public getView(): AbstractEntity {
    return this._clazz;
  }
  public setView(entity: Entity | Entity[]) {
    return entity;
  }
}
