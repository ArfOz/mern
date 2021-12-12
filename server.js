const express = require("express");
const app = express();
const apiEndpoint = require('./routes/routes');
require("dotenv").config();

app.use(express.json())  

app.use('/api', apiEndpoint);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
