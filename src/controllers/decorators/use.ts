import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";

export function use(middleware: RequestHandler): Function {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middleWares =
      Reflect.getMetadata(MetadataKeys.middleWare, target, key) || [];

    middleWares.push(middleware);

    Reflect.defineMetadata(MetadataKeys.middleWare, middleWares, target, key);
  };
}
