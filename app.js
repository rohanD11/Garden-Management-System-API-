require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

//conectDB
const conectDB = require("./db/connect");
const authentcateUser = require("./middleware/authentication");
//routers
const authRouter = require("./routes/auth");
const admin_router = require("./routes/admin");
const client_router = require("./routes/client");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// extra packages
app.get("/", (req, res) => {
  res.send("garden api");
});
// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/admin", admin_router);
app.use("/api/vl/client", client_router);
// app.use("/api/v1/admin/")

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await conectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
