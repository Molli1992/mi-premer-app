const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('usuarios', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
        },
        date_birth: {
            type: DataTypes.STRING,
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.STRING,
        }
    });
};