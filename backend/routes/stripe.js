const router = require("express").Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.APP_STRIPE_SECRET);

const { verify } = require("../middlewares/authVerification");

//Signin to stripe
router.post("/get-stripe-auth", (req, res, next) => {
  stripe.customers
    .create({
      email: `devsulaiman3@gmail.com`,
    })
    .then((response) => {
      console.log(response);
      return res.status(200).json({ response: response });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: "Cannot connect to stripe" });
    });

  next();
});

//create coupon code
router.post("/create-coupon", (req, res, next) => {
  //user's input for coupon code
  const couponInputs = {
    id: req.body.id,
    percentOff: req.body.percentOff,
    duration: req.body.duration,
    duration_in_months: req.body.durationInMonths,
    name: req.body.name,
  };

  //creating new coupon on the basis of user inputs
  stripe.coupons
    .create({
      id: couponInputs.id,
      percent_off: couponInputs.percentOff,
      duration: couponInputs.duration,
      duration_in_months: couponInputs.duration_in_months,
      name: couponInputs.name,
    })
    .then((response) => {
      return res.status(200).json({ response: response });
    })
    .catch((err) => {
      console.log("Error: ", err);
      return res.status(500).json({ error: "Unable to create coupon code" });
    });
});

//get a list of coupon codes
router.post("/get-coupon-codes", (req, res, next) => {
  stripe.coupons
    .list({
      limit: 10,
    })
    .then((response) => {
      console.log(response);
      return res.status(200).json({ response: response });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: "Unable to create coupon code" });
    });
});

//delete coupon
router.post("/delete-coupon", (req, res, next) => {
  stripe.coupons
    .del(req.body.couponId)
    .then((response) => {
      return res.status(200).json({ response: response });
    })
    .catch((err) => {
      return res.status(500).json({ error: "Unable to delete coupon code" });
    });
});

module.exports = router;
