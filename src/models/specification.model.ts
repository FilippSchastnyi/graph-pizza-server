import DataBase from './../../db.config'
import {DataTypes} from 'sequelize'

const specificationModel = DataBase.sequelize.define('specification', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  weight: {type: DataTypes.STRING, allowNull: true, unique: true},
  protein: {type: DataTypes.INTEGER, allowNull: true, unique: true},
  calories: {type: DataTypes.INTEGER, allowNull: true, unique: true},
  fats: {type: DataTypes.INTEGER, allowNull: true, unique: true},
  price: {type: DataTypes.FLOAT, allowNull: false},
  size: {type: DataTypes.INTEGER, allowNull: true, unique: true},
})

export default specificationModel
