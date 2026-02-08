import cors from "cors";
import express from "express";
import path from "path";
import api from "./routes/api";
import router from "./routes/route";
import fs from "fs";

const app = express();

app.use(express.static("public"));

app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");
const viewsPath = fs.existsSync(path.join(__dirname, "views"))
  ? path.join(__dirname, "views")
  : path.join(__dirname, "../views");

app.set("views", viewsPath);

app.use("/api", api);
app.use("/", router);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

export default app;
