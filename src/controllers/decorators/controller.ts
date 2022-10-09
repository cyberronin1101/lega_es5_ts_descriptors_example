import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { NextFunction, Request, RequestHandler, Response } from "express";

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send("Invalid Request");
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send("Missing property: " + key);
        return;
      }
    }

    next();
  };
}

export function controller(routePrefix: string) {
  return function (constructor: Function) {
    let router = AppRouter.getInstance();

    for (let key in constructor.prototype) {
      let routeHandler = constructor.prototype[key];
      let path = Reflect.getMetadata(
        MetadataKeys.path,
        constructor.prototype,
        key
      );
      let method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        constructor.prototype,
        key
      );

      let middleWares =
        Reflect.getMetadata(
          MetadataKeys.middleWare,
          constructor.prototype,
          key
        ) || [];

      let requireBodyProps =
        Reflect.getMetadata(
          MetadataKeys.validator,
          constructor.prototype,
          key
        ) || [];

      let validator = bodyValidators(requireBodyProps);

      if (path) {
        router[method](
          routePrefix + path,
          ...middleWares,
          validator,
          routeHandler
        );
      }
    }
  };
}
