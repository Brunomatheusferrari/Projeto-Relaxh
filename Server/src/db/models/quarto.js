'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quarto extends Model {
    static associate(models) {
      this.hasOne(models.Reserva, {foreignKey: "id_quarto", as: "reserva"} )
      this.hasMany(models.Servico, {foreignKey: "id_quarto"})
    }
  };
  Quarto.init({
    tipo_quarto: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["Standart", "Premium", "Deluxe"]]
      },
      allowNull: false
    },
    disponibilidade: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Quarto',
  });
  return Quarto;
};