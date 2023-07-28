const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("process.env.DB", process.env.DB_URI);
  console.log("process.env.PORT", process.env.PORT);
  mongoose
    .connect(
      "mongodb+srv://kanhaiyya:VShASiQUWALwX2UO@cluster0.starhgg.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
