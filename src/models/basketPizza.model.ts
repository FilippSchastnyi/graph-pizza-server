import sequelize from "../../db.config";
import {DataTypes} from "sequelize";
import pizzaModel from "./pizza.model";
import basketModel from "./basket.model";

const basketPizzaModel = sequelize.SQL.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
  })

basketPizzaModel.hasMany(pizzaModel)
basketPizzaModel.belongsTo(basketModel)

export default basketPizzaModel