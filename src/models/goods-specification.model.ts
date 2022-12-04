import DataBase from './../../db.config'
import {DataTypes} from 'sequelize'

const goodsSpecificationModel = DataBase.sequelize.define('goods_specification', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  weight: {type: DataTypes.STRING, allowNull: true, unique: true},
  protein: {type: DataTypes.STRING, allowNull: true, unique: true},
  calories: {type: DataTypes.STRING, allowNull: true, unique: true},
  fats: {type: DataTypes.STRING, allowNull: true, unique: true},
  description: {type: DataTypes.STRING, allowNull: true, unique: true},
})

export default goodsSpecificationModel
