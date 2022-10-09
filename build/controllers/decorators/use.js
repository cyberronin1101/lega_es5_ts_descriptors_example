"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function use(middleware) {
    return function (target, key, desc) {
        var middleWares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleWare, target, key) || [];
        middleWares.push(middleware);
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleWare, middleWares, target, key);
    };
}
exports.use = use;
//# sourceMappingURL=use.js.map