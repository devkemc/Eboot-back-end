import { Entity } from "../../domain/interfaces/i-entity";
import { Result } from "../../presentation/helpers/result";

export interface IRepositoryCrud{
    create(entity: Entity): Promise<Result>
    getAll(): Promise<Result>
    delete(entity: Entity): Promise<Result>
    getOne(entity: Entity): Promise<Result>
    update(entity: Entity): Promise<Result>
    
 
}