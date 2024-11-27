const express = require("express");
const app = express();
const cors =require('cors');


require("dotenv").config(); // Ensure .env is loaded
require('../db/index')

app.use(cors());
app.use(express.json());

const itemsRouter = require('../routers/items.router');  
const dealsRouter = require('../routers/deals.router');
const paymentRouter=require('../routers/payment.router');
const emailRouter=require("../routers/mail.router");
const cartRouter=require("../routers/cart.router");
const historyRouter=require("../routers/orderHistory.router")

app.get("/", (req, res) => {
    res.send("hello from backend server");
});

app.use('/api/items',itemsRouter);
app.use('/api/deals',dealsRouter);
app.use('./api/payment',paymentRouter);
app.use("/api/email", emailRouter);
app.use('/api/cart', cartRouter);
app.use("/api",historyRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
