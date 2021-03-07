const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// ファイル

const filePath = "./data.json";
// const fs = require("fs");
// const path = require("path");
const moviesData = require(filePath);


app.prepare().then(() => {
  const server = express();
  // body-Parser
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: true }));

  //  endpoint
  server.get("/api/v1/movies", (req, res) => {
    return res.json(moviesData);
  });

  // PORT
  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on port " + PORT);
  });
});

