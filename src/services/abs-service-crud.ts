import { Entity } from "../domain/i-entity";

export abstract class AbsServiceCrud {
  constructor() {}

  public create(entity: Entity) {
    return Promise.resolve(entity);
  }

  public getAll(entity: Entity) {
    console.log("chegou na service");
    return Promise.resolve(entity);
  }

  public delete(entity: Entity) {
    return Promise.resolve(entity);
  }

  public getOne(entity: Entity) {
    return Promise.resolve(entity);
  }
  public update(entity: Entity) {
    return Promise.resolve(entity);
  }
}
