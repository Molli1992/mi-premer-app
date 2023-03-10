const axios = require("axios");

class PaymentService {
    async createPayment(title, unit_price) {
        const url = "https://api.mercadopago.com/checkout/preferences";

        const body = {
            items: [
                {
                    title: title,
                    description: "Iphone",
                    picture_url: "http://www.myapp.com/myimage.jpg",
                    category_id: "category123",
                    quantity: 1,
                    unit_price: unit_price
                }
            ],
            back_urls: {
                failure: "http://localhost:3000",
                pending: "http://localhost:3000",
                success: "http://localhost:3000"
            }
        };

        const payment = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        return payment.data;
    }

}

module.exports = PaymentService;