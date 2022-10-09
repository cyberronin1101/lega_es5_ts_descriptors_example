import express from "express";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";
import "./controllers/RootController";

const app = express();

// lega bodyParser
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["secret_key"] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
