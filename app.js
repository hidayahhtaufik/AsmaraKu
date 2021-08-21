const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const { connect } = require("./config/mongodb");
const router = require("./routes/index.js");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.use(router);
app.use(errorHandler);

connect().then(() => {
  console.log("mongodb connect");
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
});
