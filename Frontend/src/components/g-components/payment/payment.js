import React from "react";
import axios from "axios";

const PaytmPayment = () => {
    const initiatePayment = async () => {
        const paymentDetails = {
            amount: "100.00", // Payment amount
            email: "user@example.com", // Customer email
            orderId: `ORDER_${Date.now()}`, // Unique order ID
        };

        const response = await axios.post(
            "http://localhost:5000/api/payments/payment",
            paymentDetails
        );

        const { url, params } = response.data;

        // Submit form dynamically
        const form = document.createElement("form");
        form.action = url;
        form.method = "POST";

        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = JSON.stringify(params[key]);
                form.appendChild(input);
            }
        }

        document.body.appendChild(form);
        form.submit();
    };

    return (
        <button onClick={initiatePayment} className="btn">
            Pay with Paytm
        </button>
    );
};

export default PaytmPayment;
