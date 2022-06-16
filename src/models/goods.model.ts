import sequelize from '../../db.config'
import {DataTypes} from 'sequelize'
import pizzaModel from "./pizza.model";

const goodsModel = sequelize.SQL.define('goods',
  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
  })

goodsModel.hasMany(pizzaModel)

export default goodsModel