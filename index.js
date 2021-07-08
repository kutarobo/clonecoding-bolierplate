const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
// todo 옵션 의미
mongoose
  .connect(
    "mongodb+srv://doosik:dPwpqlqjs1234@movie-site.07uxx.mongodb.net/youtube?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connect..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
