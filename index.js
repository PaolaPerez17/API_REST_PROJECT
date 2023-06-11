const express = require("express");
const app = express();
const cors = require("cors");
const { config } = require("./config/config");

const port = config.port || 3000;
app.use(cors());
app.use(express.json());

app.use("/api/v1", require("./routers"));

app.listen(port, () => {
  try {
    console.log(` http://localhost:${port} established connection `);
  } catch (error) {
    console.log("message: message", error);
  }
});
