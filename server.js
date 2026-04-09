const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

//dotenve configuration
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname, "./nirmala/build")));

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./nirmala/build/index.html"));
});

//port
const PORT = process.env.PORT || 8080;

//Listen
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Running on PORT ${PORT}`);
});
