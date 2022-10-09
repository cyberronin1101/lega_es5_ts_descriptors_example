import { NextFunction, Request, Response } from "express";
import { bodyValidator, controller, get, post, use } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Request was made!");
  next();
}

@controller("/auth")
class LoginController {

  @get("/login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="post">
        <div>Email: test@mail.ts</div>
        <div>Password: test</div>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email">
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password">
        </div>
        <button type="submit">Submit</button>
      </form>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    let { email, password } = req.body;

    if (email === "test@mail.ts" && password === "test") {
      req.session = {
        loggedIn: true,
      };
      res.redirect("/");
      return;
    } else {
      res.send("Incorrect email or password");
    }

    res.send(email + " " + password);
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
