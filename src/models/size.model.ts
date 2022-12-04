import DataBase from './../../db.config'
import {DataTypes} from 'sequelize'

const sizeModel =  DataBase.sequelize.define('size', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    size: {type: DataTypes.INTEGER, allowNull: true, unique: true},
  })



export default sizeModel
