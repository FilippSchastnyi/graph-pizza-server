import sequelize from "../../db.config";
import {DataTypes} from "sequelize";

const BasketModel = sequelize.SQL.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  })