import sequelize from './../../db.config'
import {DataTypes} from 'sequelize'
import goodsModel from "./goods.model";
import basketPizzaModel from "./basketPizza.model";
import ratingModel from "./rating.model";

const pizzaModel = sequelize.SQL.define('pizza', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
  price: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
  rate: {type: DataTypes.STRING},
  count: {type: DataTypes.STRING},
})

pizzaModel.belongsTo(goodsModel)
pizzaModel.hasOne(basketPizzaModel)
pizzaModel.hasOne(ratingModel)

export default pizzaModel
