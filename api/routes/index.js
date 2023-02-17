const express = require("express");
const router = express.Router();

const PaymentController = require("../Controllers/PaymentsControllers");
const PaymentService = require("../Services/PaymentsService");
const PaymentInstance = new PaymentController(new PaymentService());


router.post("/payment", function (req, res, next) {
    PaymentInstance.getPaymentLink(req, res);
});

module.exports = router;
