const { getDatabase } = require("../config/mongodb");
const { ObjectId } = require("bson");

class Asmaraku {
  static async find() {
    return getDatabase().collection("asmaraku").find().toArray();
  }

  static async findOne(id) {
    return getDatabase()
      .collection("asmaraku")
      .findOne({ _id: ObjectId(id) });
  }

  static async post(newAsmaraku) {
    return getDatabase().collection("asmaraku").insertOne(newAsmaraku);
  }

  static async edit(id, editAsmaraku) {
    return getDatabase()
      .collection("asmaraku")
      .replaceOne(
        {
          _id: ObjectId(id),
        },
        editAsmaraku
      );
  }

  static async delete(id) {
    return getDatabase()
      .collection("asmaraku")
      .deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = Asmaraku;
