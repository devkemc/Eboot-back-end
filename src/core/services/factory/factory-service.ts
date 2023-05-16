import {HttpNotFound} from "../../../presentation/utils/errors/http-not-found";
import {pegaPathOriginal} from "../../../presentation/utils/pega-path-original";

import {servicesMap} from "./config-services";

export class FactoryService {
  public static createService(path: string) {
    const entityPath  = pegaPathOriginal(path)
    if(entityPath in servicesMap) return new servicesMap[entityPath]()
      throw new HttpNotFound('Service não configura para este endpoint')
  }
}