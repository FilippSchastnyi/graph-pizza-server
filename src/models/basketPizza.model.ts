import sequelize from "../../db.config";
import {DataTypes} from "sequelize";

const basketPizzaModel = sequelize.SQL.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
  })



export default basketPizzaModel