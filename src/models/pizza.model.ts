import DataBase from './../../db.config'
import {DataTypes} from 'sequelize'

const pizzaModel = DataBase.SQL.define('pizza', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
  price: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING, allowNull: false},
  rate: {type: DataTypes.STRING},
  count: {type: DataTypes.STRING, defaultValue: 0},
  image: {type: DataTypes.STRING, allowNull: false},
})

export default pizzaModel
