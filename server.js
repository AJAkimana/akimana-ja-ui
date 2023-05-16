import express from "express";
import path from "path";
import dotenv from "dotenv";
import { appSecurity } from "./config/security";
import { contactMe, getMyInfo } from "./config/handler";

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/build"));
app.use(
  express.urlencoded({
    limit: "1mb",
    parameterLimit: 100000,
    extended: false,
  })
);
app.use(express.json({ limit: "1mb" }));

appSecurity(app);

app.post("/api/contact-me", contactMe);
app.get("/api/get-my-info", getMyInfo);
app.use("/api/cv", express.static("./res"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/build", "index.html"));
});

app.listen(port, () => console.log(`listening on port ${port}`));
