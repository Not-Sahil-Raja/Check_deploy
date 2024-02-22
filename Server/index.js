import express from "express";
// const express = require("express");
let PORT = 5000;

const app = express();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
