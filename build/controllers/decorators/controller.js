"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send("Invalid Request");
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send("Missing property: " + key);
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (constructor) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in constructor.prototype) {
            var routeHandler = constructor.prototype[key];
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, constructor.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, constructor.prototype, key);
            var middleWares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleWare, constructor.prototype, key) || [];
            var requireBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, constructor.prototype, key) || [];
            var validator = bodyValidators(requireBodyProps);
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray([routePrefix + path], middleWares, false), [validator,
                    routeHandler], false));
            }
        }
    };
}
exports.controller = controller;
//# sourceMappingURL=controller.js.map