import DataBase from "../../db.config";
import {DataTypes} from "sequelize";

const basketPizzaModel = DataBase.SQL.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
  })

export default basketPizzaModel