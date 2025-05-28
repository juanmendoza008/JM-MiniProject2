// Comments
const express = require("express");
const cors = require("cors");

// Asigning Route to get there
const userRoutes = require("./routes/userRoutes");
const accountRoutes = require("./routes/accountRoutes");

//Define App & Port
const app = express();
const port = 3008;

//Swagger
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

// To connect front end with back end from [Front End]
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// parse requests of content-type - application/json
app.use(express.json());

// Static one just print the default html page
app.use("/", express.static("public"));
// Choosing the One to use
app.use("/users", userRoutes);
app.use("/account", accountRoutes);

//Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// App listen
app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
