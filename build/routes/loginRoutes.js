"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Access denied");
}
var router = (0, express_1.Router)();
exports.router = router;
router.get("/protected", function (req, res) {
    res.send("Welcome to protected route, logged in user");
});
// Do not write
//
// @atController("/auth")
// class LoginController {
//   @get("/login")
//   getLogin(req: Request, res: Response): void {
//     res.send("form");
//   }
//
//   @use(requireAuth)
//   @post("/login")
//   @validateBody("email", "password")
//   postLogin(req: Request, res: Response): void {}
// }
//
// function get(arg: string): Function {
//   return function () {};
// }
//
// function post(routeName: string): Function {
//   return function (target: any, key: string, desc: PropertyDescriptor): void {
//     router.post(routeName, target[key]);
//   };
// }
//
// function use(middleWare: any): Function {
//   return function (target: any, key: string, desc: PropertyDescriptor): void {};
// }
//# sourceMappingURL=loginRoutes.js.map