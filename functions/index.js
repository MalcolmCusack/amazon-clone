const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')("sk_test_51HUlM0Hul3Pthfeir26tsWvGHDGJiDwCYUMLwaTpso9BlCNkdMYDeKmOX3WjZFFaq5ih2JP3M5qDJhHEwe7T8Mtf00eazoBQKW");

// app config
const app = express();

// middle ware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total; //could use params

    console.log('Payment Request got! YEET! >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// listener
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
