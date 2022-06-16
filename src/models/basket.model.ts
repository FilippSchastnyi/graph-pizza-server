import sequelize from "../../db.config";
import {DataTypes} from "sequelize";
import userModel from "./user.model"
import basketPizzaModel from "./basketPizza.model";

const basketModel = sequelize.SQL.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
  })

basketModel.belongsTo(userModel)
basketModel.hasOne(basketPizzaModel)

export default basketModel