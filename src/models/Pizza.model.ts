import sequelize from './../../db.config'
import {DataTypes} from 'sequelize'

const pizzaModel = sequelize.SQL.define('pizza', {
  id: {type: DataTypes.STRING, primaryKey: true, autoIncrement: true}
})