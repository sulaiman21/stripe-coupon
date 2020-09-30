require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//routes
const auth = require("./routes/auth");

//Stripe
const stripe = require("./routes/stripe");

//PORT
const PORT = process.env.PORT || 4000;

const app = express();

//cross origin setup
app.use(cors());
//data parser
app.use(bodyParser.json());
//cookie parser
app.use(cookieParser());

//api
app.use("/stripe/api", stripe);
app.use("/auth/api", auth);

//db Connection
mongoose
  .connect(process.env.APP_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //On Success
    console.log(`DB Connected!, Please wait while connecting to Server...`);
    app.listen(PORT, () =>
      console.log(`Listening to PORT ${PORT}, Connection Successful!`)
    );
  })
  .catch((e) => {
    //On Failed
    console.log(`DB Connection Error: ${e}`);
    throw e;
  });
