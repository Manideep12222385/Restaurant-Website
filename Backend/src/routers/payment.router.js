const express = require("express");
const PaytmChecksum = require("paytmchecksum");
const router = express.Router();

const paytmParams = {};
const merchantId = "YOUR_MERCHANT_ID";
const merchantKey = "YOUR_MERCHANT_KEY";
const websiteName = "WEBSTAGING"; // Use "DEFAULT" for live

// Generate Payment URL
router.post("/", async (req, res) => {
    const { amount, email, orderId } = req.body;

    paytmParams.body = {
        requestType: "Payment",
        mid: merchantId,
        websiteName,
        orderId,
        callbackUrl: "http://localhost:5000/api/payments/callback",
        txnAmount: {
            value: amount,
            currency: "INR",
        },
        userInfo: {
            custId: email,
        },
    };

    const checksum = await PaytmChecksum.generateSignature(
        JSON.stringify(paytmParams.body),
        merchantKey
    );

    const params = {
        head: {
            signature: checksum,
        },
        body: paytmParams.body,
    };

    res.json({
        url: `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=${merchantId}&orderId=${orderId}`,
        params,
    });
});

// Callback for Payment Response
router.post("/callback", (req, res) => {
    const { CHECKSUMHASH, ...receivedParams } = req.body;

    const isValidChecksum = PaytmChecksum.verifySignature(
        receivedParams,
        merchantKey,
        CHECKSUMHASH
    );

    if (isValidChecksum) {
        // Handle success or failure response
        if (receivedParams.STATUS === "TXN_SUCCESS") {
            return res.json({ status: "success", data: receivedParams });
        } else {
            return res.json({ status: "failure", data: receivedParams });
        }
    } else {
        return res.status(400).json({ error: "Checksum Mismatch" });
    }
});

module.exports = router;
