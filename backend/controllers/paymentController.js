const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(
  "sk_test_51Mt814SGfHoMxoQBxiiWoYsOfLSHZ117vFG3lncnBtSqcAd8QB4uSvciiP0bJvDuGGcgV5NKKlMFmqHDJ7WvYccB00NPtCgeAP"
);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res
    .status(200)
    .json({
      stripeApiKey:
        "pk_test_51Mt814SGfHoMxoQBiNM4GBBrRVKICJshOQqZHMICjedjkEWxVETwvYKcs0FqhtepnQLdOgrJgaX7gKada2fbI6ts002K1R8WED",
    });
});
