import "reflect-metadata";

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

@controller
class Car {
  color = "black";

  @get("/login")
  drive(): void {
    console.log("I'm driving!");
  }
}

function get(path: string): Function {
  return function (target: any, key: string): void {
    Reflect.defineMetadata("path", path, target, key);
  };
}

// const info = Reflect.getMetadata("info", Car.prototype, "drive");
//
// console.log(info);

// function printMetadata(target: typeof Car): void{
function controller(target: Function): void {
  console.log("test1");
  console.log("test1");

  for (let key in target.prototype) {
    console.log("test");
    let path = Reflect.getMetadata("path", target.prototype, key);
    let middleware = Reflect.getMetadata("middleware", target.prototype, key);

    // router.get(path, middleware, target.prototype[key]);
  }
}
