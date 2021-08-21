const axios = require("axios");
const Asmaraku = require("../models/index.js");

class Controller {
  static async fetchCorona(req, res, next) {
    try {
      const corona = await Asmaraku.find();
      res.status(200).json(corona);
    } catch (err) {
      next(err);
    }
  }

  static async postCorona(req, res, next) {
    try {
      const newAsmaraku = await axios({
        url: `https://api.kawalcorona.com/indonesia`,
        method: "GET",
      });
      console.log(newAsmaraku.data[0]);
      const asmaraku = await Asmaraku.post(newAsmaraku.data[0]);
      res.status(201).json(asmaraku);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
