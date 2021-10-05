'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comida extends Model {
    static associate(models) {
      // define association here
    }
  };
  Comida.init({
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["Comida","Bebida"]]
      }
    },
    preco: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Comida',
  });
  return Comida;
};