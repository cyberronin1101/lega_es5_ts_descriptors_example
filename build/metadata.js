"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// Reflect.defineMetadata();
// Reflect.getMetadata();
/*

let box = {
  color: "black",
};

// Metadata for object

Reflect.defineMetadata("note", "hello", box);
Reflect.defineMetadata("width", 30, box);

let note = Reflect.getMetadata("note", box);
let width = Reflect.getMetadata("width", box);

console.log("note: " + note);
console.log("width: " + width);

// Metadata for object property

Reflect.defineMetadata("note", "hello", box, "color");

let noteForProperty = Reflect.getMetadata("note", box, "color");

console.log("noteForProperty: " + noteForProperty);
*/
var Car = /** @class */ (function () {
    function Car() {
        this.color = "black";
    }
    Car.prototype.drive = function () {
        console.log("I'm driving!");
    };
    __decorate([
        get("/login"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Car.prototype, "drive", null);
    Car = __decorate([
        controller
    ], Car);
    return Car;
}());
function get(path) {
    return function (target, key) {
        Reflect.defineMetadata("path", path, target, key);
    };
}
// const info = Reflect.getMetadata("info", Car.prototype, "drive");
//
// console.log(info);
// function printMetadata(target: typeof Car): void{
function controller(target) {
    console.log("test1");
    console.log("test1");
    for (var key in target.prototype) {
        console.log("test");
        var path = Reflect.getMetadata("path", target.prototype, key);
        var middleware = Reflect.getMetadata("middleware", target.prototype, key);
        // router.get(path, middleware, target.prototype[key]);
    }
}
//# sourceMappingURL=metadata.js.map