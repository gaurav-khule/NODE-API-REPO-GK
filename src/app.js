import express from "express";
const APP = express();
// GET
APP.get("/api/users", function (req, res) {
  res.send(["Alex", "Harry", "Martin"]);
});
//POST
APP.post("/api/add", function (req, res) {
  res.send({ msg: "User Added in DB" });
});
//PUT
APP.put("/api/update", function (req, res) {
  res.send({ msg: "User Updated in DB" });
});
//DELETE
APP.delete("/api/delete", function (req, res) {
  res.send({ msg: "User Deleted from DB" });
});
APP.listen(4003, function () {
  console.log("Application is STARTED");
});
