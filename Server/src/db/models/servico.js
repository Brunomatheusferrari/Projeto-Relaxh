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
    produtos: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), 
      defaultValue: null
    },
    tipo: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["Delivery","Limpeza"]]
      }
    },
    horario: {
      type: DataTypes.DATE,
    },
    descricao: {
      type: DataTypes.STRING
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