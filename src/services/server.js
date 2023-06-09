const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51NGqg7LXUFfNg8Sm2wv2Btt8ebyYFTtGgPURTQibPO6SCTkbepuomZ3gmZSYHMuI4XLggbX9gE2qshYY5F0F35zS00oRSbfwyN"
);

console.log("RESPONSE FROM STRIPE SERVER", app);

app.use(express.static("public"));
app.use(express.json());
app.use(
  require("cors")({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  console.log("MADE IT TO THE SERVER");
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  console.log("PAYMENT INTENT", paymentIntent);

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
