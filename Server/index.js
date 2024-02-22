import express from "express";
import mongoose from "mongoose";
// const express = require("express");
let PORT = 5000;
let MongoDB_URI =
  "mongodb+srv://sahilraja:Cf6iMhfY5YG4TozK@agricocluster.7ealjjl.mongodb.net/?retryWrites=true&w=majority&appName=AgricoCluster";

// Connect to MongoDB
try {
  const connInst = await mongoose.connect(MongoDB_URI).catch((err) => {
    console.log("MONGO DB Error (1): ", err);
  });
  console.log(
    `MONGO DB Connected \nDB Host: ${connInst.connection.host} \nDB Name: ${connInst.connection.name}`
  );
} catch (error) {
  console.log("MONGO DB Error (2): ", error);
  process.exit(1);
}

const app = express();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server up and running!");
});
