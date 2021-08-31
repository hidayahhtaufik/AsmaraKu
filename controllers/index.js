const axios = require("axios");
const Asmaraku = require("../models/index.js");

class Controller {
  static async fetchCorona(req, res, next) {
    try {
      const corona = await Asmaraku.find();
      console.log(corona[corona.length - 1]);
      res.status(200).json(corona[corona.length - 1]);
    } catch (err) {
      next(err);
    }
  }

  static async postCorona(req, res, next) {
    try {
      const newAsmaraku = await axios({
        url: `https://api.kawalcorona.com/`,
        method: "GET",
      });
      // console.log(newAsmaraku.data);
      const asmaraku = await Asmaraku.post(newAsmaraku.data[0]);
      res.status(201).json(asmaraku);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
