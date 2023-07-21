const express = require('express');
const cors = require('cors');

// initializes a stripe client for our specific account
const stripe = require('stripe')('sk_test_51NVcbdISQQoXlCSQ1T5HYN9Z7YddA4V063ZneBLqdYUh6HznUCZBM3AZ12qoChO7M7ebsjmEEojclaZyB534TdmI00KZZM7QWn');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log('req body: ', req.body);
  const items = req.body.items;
  let lineItems = [];
  // lineItems contains the data we want to send to stripe
  // converted into a format that stripe understands
  items.forEach((item) => {
    lineItems.push(
      {
        price: item.id,
        quantity: item.quantity,
      }
    )
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    // success_url: "http://localhost:5173/ts-shopping-cart/success",
    // cancel_url: "http://localhost:5173/ts-shopping-cart",
    success_url: "https://n-tse.github.io/ts-shopping-cart/",
    cancel_url: "https://n-tse.github.io/ts-shopping-cart/",
  });

  res.send(JSON.stringify({
    url: session.url
  }));

});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));