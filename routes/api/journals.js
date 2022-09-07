const express = require("express");
const router = express.Router();
// const verify = require("../verifyToken");

const Journal = require("../../models/Journal");

router.get("/", (req, res) => {
  Journal.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});
router.post("/", (req, res) => {
  const newJournal = new Journal({
    header: req.body.header,
    body: req.body.body,
  });
  newJournal.save().then((item) => res.json(item));
});

router.delete("/:id", (req, res) => {
  Journal.findById(req.params.id)
    .then((item) => item.remove().then(res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
