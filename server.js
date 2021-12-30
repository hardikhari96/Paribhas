require('dotenv').config();
const port = process.env.PORT;
const app = require('./routes/index');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})