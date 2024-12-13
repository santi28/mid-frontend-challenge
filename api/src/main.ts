import cors from "cors";
import morgan from "morgan";
import express from "express";

import router from "./routes/router";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
