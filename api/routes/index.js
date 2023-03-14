const express = require("express");
const router = express.Router();
const { Usuarios, Celulares } = require("../db");

const PaymentController = require("../Controllers/PaymentsControllers");
const PaymentService = require("../Services/PaymentsService");
const PaymentInstance = new PaymentController(new PaymentService());




// -------------------------- Mercado Pago ----------------------------------------


router.post("/payment", function (req, res, next) {
    PaymentInstance.getPaymentLink(req, res);
});



// ------------------------ Usuarios -------------------------------------------------------


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

router.get("/usuarios/:email", async (req, res) => {

    try {

        const { email } = req.params;

        const user = await Usuarios.findAll({
            where: { email: email }
        });

        if (user.length !== 0) {
            return res.json(user);
        };

        res.status(404).send("usuario no encotrados");

    } catch (error) {

        console.log(error)

    }

});


router.post("/usuarios", async (req, res) => {

    try {

        const { email } = req.body;

        if (email) {

            await Usuarios.findOrCreate({ where: { email: email } });

            return res.status(201).send({ message: "Usuario Creado" });

        } else {

            return res.status(412).send({ message: "Se requiere informacion" });

        }

    } catch (error) {

        console.log(error)

    }

});


router.put("/usuarios/:email", async (req, res) => {

    try {

        try {
            let { email } = req.params;
            let { first_name, last_name, nationality, date_birth, img } = req.body;

            const user = await Usuarios.findOne({
                where: {
                    email: email
                }
            });

            if (!user) {
                return res.status(404).json({ msg: "user not found" });
            }

            user.update(
                {
                    first_name: first_name,
                    last_name: last_name,
                    nationality: nationality,
                    date_birth: date_birth,
                    img: img
                }
            );

            res.status(201).json(user);

        } catch (err) {
            res.status(401).json({ message: err });
        };

    } catch (error) {

        console.log(error)

    }

});


// ---------------------------- Celulares ----------------------------------------


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
