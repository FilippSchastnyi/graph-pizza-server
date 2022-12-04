import DataBase from './../../db.config'
import {DataTypes} from 'sequelize'

const goodsCategoryModel = DataBase.sequelize.define('goods_category', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

export default goodsCategoryModel
