const express = require("express");
const routes = require("./routes");
const cors = require('cors');
const app = express();
app.use(cors());
app.use("/api", routes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
