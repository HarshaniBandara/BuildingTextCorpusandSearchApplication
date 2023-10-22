const express = require("express");
const cros = require('cros');
const routes = require("./routes");
// app.use(cros());
app.use("/api", routes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
