const { Usuarios, Celulares } = require('./db');

const loadUsuarios = require('./data/usuarios.json');
const loadCelulares = require('./data/celulares.json');

async function loadAllModelsInDB() {

    try {
        await Usuarios.bulkCreate(loadUsuarios);
        console.log('Users loaded ok to DB')
        await Celulares.bulkCreate(loadCelulares);
        console.log('Celulares loaded ok to DB')
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    loadAllModelsInDB
}