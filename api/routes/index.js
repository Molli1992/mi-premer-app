const express = require("express");
const router = express.Router();
const { Usuarios, Celulares } = require("../db");

const PaymentController = require("../Controllers/PaymentsControllers");
const PaymentService = require("../Services/PaymentsService");
const PaymentInstance = new PaymentController(new PaymentService());


router.post("/payment", function (req, res, next) {
    PaymentInstance.getPaymentLink(req, res);
});


router.get("/usuarios", async (req, res) => {

    try {

        const usuarios = await Usuarios.findAll();

        if (usuarios.length !== 0) {
            return res.json(usuarios);
        };

        res.status(404).send("usuarios no encotrados");

    } catch (error) {

        console.log(error)

    }

});


router.get("/celulares", async (req, res) => {

    try {

        const celulares = await Celulares.findAll();

        if (celulares.length !== 0) {
            return res.json(celulares);
        };

        res.status(404).send("celulares no encotrados");

    } catch (error) {

        console.log(error)

    }

});

router.get("/celulares/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const celular = await Celulares.findAll({
            where: { id: id }
        });

        if (celular.length !== 0) {
            return res.json(celular);
        };

        res.status(404).send("celular no encotrados");

    } catch (error) {

        console.log(error)

    }

});

module.exports = router;
