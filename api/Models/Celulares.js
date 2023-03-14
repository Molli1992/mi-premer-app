const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('celulares', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descripcion1: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        descripcion2: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        descripcion3: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        descripcion4: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    });
};