class PaymentController {
    constructor(subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    async getPaymentLink(req, res) {
        try {

            const { title, unit_price } = req.body;

            const payment = await this.subscriptionService.createPayment(title, unit_price);

            return res.json(payment);
        } catch (error) {
            console.log(error);

            return res
                .status(500)
                .json({ error: true, msg: "Failed to create payment" });
        }
    }

}

module.exports = PaymentController;