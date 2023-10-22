const express = require("express");
const router = express.Router();
const elasticController = require("../controllers/elasticserchController");

router.get("/y", async (req, res) => {
  console.log("hhhhhhhhh");
  res.status(500).json({ succcess: "no error occurred" });
});

router.post("/search", async (req, res) => {
  console.log(
    "search request........................................................................................................."
  );
  console.log(req.body);
  console.log(req.query);
  const query = req.query.q;
  try {
    const results = await elasticController.search(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/search-by-poet", async (req, res) => {
  console.log(
    "search by poet.........................................................................................................."
  );
  try {
    const results = await elasticController.searchByPoet(query);
    res.json(res);
  } catch (error) {
    res.status(500).json({
      error: "An error occured",
    });
  }
});

module.exports = router;
