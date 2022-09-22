import DataBase from "../../db.config";
import {DataTypes} from "sequelize";

const basketPizzaModel = DataBase.sequelize.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
  })

export default basketPizzaModel
