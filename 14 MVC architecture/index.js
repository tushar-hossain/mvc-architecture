const express = require("express");
const userRoute = require("./routes/users.route");
const productsRoute = require("./routes/products.route");
const app = express();
const PORT = 5173;

app.use(express.urlencoded({ extends: true }));

app.use(productsRoute);
app.use(userRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
