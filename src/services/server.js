const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51NGqg7LXUFfNg8Sm2wv2Btt8ebyYFTtGgPURTQibPO6SCTkbepuomZ3gmZSYHMuI4XLggbX9gE2qshYY5F0F35zS00oRSbfwyN"
);

app.use(express.static("public"));
app.use(express.json());
app.use(
  require("cors")({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const calculateOrderAmount = (items) => {
  const totalCart = items.reduce(
    (acc, curr) => acc + Number(curr.price * curr.quantity),
    0
  );

  const stripeCost = (totalCart + 0.3) / (1 - 0.029);
  const totalCost = stripeCost * 100;
  return totalCost.toFixed(0);
};

app.post("/create-payment-intent", async (req, res) => {
  const { cart } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(cart),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.get("/success", async (req, res) => {
  console.log("STRIPE IN SERVER", stripe.checkout.sessions);
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  console.log("SESSION IN SERVER", session);
  const customer = await stripe.customers.retrieve(session.customer);
  console.log("Customer IN SERVER", customer);

  res.send(
    `<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`
  );
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
