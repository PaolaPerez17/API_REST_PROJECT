const express = require("express");
const app = express();
const {config} = require('./config/config')

const port = config.port || 3000

app.use(express.json());


app.use("/api/v1", require("./routers"));

app.listen(port, () => {
  console.log(` http://localhost:${port}`);
});




