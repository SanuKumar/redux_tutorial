const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoute = require("./routes/userRoutes");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const cors = require("cors");
const app = express();

// Define the CORS options
const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000", "http://localhost:8000"], // Whitelist the domains you want to allow
};

app.use(cors(corsOptions)); // Use the cors middleware with your options

dotenv.config();

if (process.env.NODE_ENV === "development") {
  morgan("dev");
}

app.use(express.json());

app.use("/api/users", userRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
