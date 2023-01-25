const mongoose = require("mongoose");

const dbConection = async() => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar la BD");
  }
}

module.exports = {
  dbConection
}