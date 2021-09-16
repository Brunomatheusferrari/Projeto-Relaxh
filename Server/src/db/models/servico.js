'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servico extends Model {
    static associate(models) {
      this.belongsTo(models.Quarto, { foreignKey: "id_quarto" })
    }
  };
  Servico.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero_quarto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    horario: {
      type: DataTypes.DATE,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_quarto: {
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: "quartos"
        },
        key: "id"
      },
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Servico',
  });
  return Servico;
};