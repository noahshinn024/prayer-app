const express = require("express");
const router = express.Router();

const Streak = require("../../models/Streak");

router.get("/", (req, res) => {
  Streak.find().then((streak) => res.json(streak));
});

router.put("/", (req, res) => {
  const updatedStreak = req.body.body;
  Streak.findByIdAndUpdate("617471bde6844d3bc6e25392", {
    value: updatedStreak,
  })
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
});

module.exports = router;
