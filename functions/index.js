const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51MUaHtJj4XFwEzs7wRKCaHwpjt9ErgeB9lBzWGwc37eOPAF96MAIBI9zVQhIzTx2qpan2R9t7MUM7IZ3pCSDw0aD0053wPLeXf");

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send("Hello world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received for this amount >>>', total);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
        });

        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        response.status(500).send({ error: "Payment intent creation failed" });
    }
});
// Listen command
exports.api = functions.https.onRequest(app);

// Key Points:
// Ensure the Stripe secret key is correct.
// Added a try-catch block in the /payments/create route to handle potential errors in payment intent creation.
// Added logging for any errors that occur while creating the payment intent.

//-------------------------------------------------------------------------------------------------------------------//


// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");

// const stripe = require("stripe")("sk_test_51Nl6cTEHx6HMgKSKAKGyvtbMNrHp1snmZZn8U9uQC3bZLqqOT1w5tRG6A7N54eRvNG2gRF8boRBL9657fH2u17AB00DH1trXMy")

// //API

// //App config
// const app = express();

// //Middlewaeres
// app.use(cors({origin: true}));
// app.use(express.json());

// //ApI routes
// app.get('/', (request, response) => response.status(200).send("hello world"))

// app.post('/payments/create', async (request, response)=> {
//     const total = request.query.total;

//     console.log('Payment request receied My G for this amoubnt >>>', total)

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total,
//         currency: "usd",
//     });

//     response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });

// //Listen command
// exports.api = functions.https.onRequest(app)

// //example endpoint
// //(http://127.0.0.1:5001/naturally-crown/us-central1/api)