const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const { connect } = require("./config/mongodb");
const router = require("./routes/index.js");
const cron = require("node-cron");
const { postCorona } = require("./controllers/index");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

cron.schedule(`0 0 * * *`, () => {
  console.log("masuk cron");
  postCorona();
});

app.use(router);
app.use(errorHandler);

connect().then(() => {
  console.log("mongodb connect");
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
});
