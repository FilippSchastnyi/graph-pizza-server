import sequelize from './../../db.config'
import {DataTypes} from 'sequelize'

const pizzaModel = sequelize.SQL.define('pizza', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
  price: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
  rate: {type: DataTypes.STRING},
  count: {type: DataTypes.STRING},
})

export default pizzaModel
