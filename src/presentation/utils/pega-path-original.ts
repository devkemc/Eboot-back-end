export function pegaPathOriginal(path:string){
  return  `/${path.split("/").slice(1, 2).join()}`
}