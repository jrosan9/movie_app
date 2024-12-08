const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.port || 4111;

app.use("/api/movies", require("../Routes/movies.js"));
app.use("/api/genres", require("../Routes/genres.js"));

app.use("/", express.static(__dirname + "/../client/dist"));
app.use("*", express.static(__dirname + "/../client/dist"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
