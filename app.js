require("dotenv").config();
require("async-express-error");
const express = require("express");
const app = express();

// database
const connectDB = require("./db/connectDB");

// routes
const authRoutes = require("./routes/auth");
const workoutRoutes = require("./routes/workout");

// middlewares
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");
const authentication = require("./middlewares/authentication");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(" workout tracker API ");
  res.end();
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/workout", authentication, workoutRoutes);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
