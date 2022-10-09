import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

function routBinder(method: string): Function {
  return function (path: string): Function {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export let get = routBinder(Methods.get);
export let post = routBinder(Methods.post);
export let put = routBinder(Methods.put);
export let del = routBinder(Methods.del);
export let patch = routBinder(Methods.patch);
