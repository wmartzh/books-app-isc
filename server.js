require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const router = require("./router");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
// app.options('*',cors())
app.use(helmet());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(process.env.PORT, () => {
  console.log(
    `⚡Server listening at http://${process.env.HOST}:${process.env.PORT}`
  );
});
