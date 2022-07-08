const express = require("express");

const usersRoutes = require("./routes/usersRouter");

const app = express();

app.use(express.json());

app.get("/", usersRoutes);

module.exports = app;
