import sequelize from '../../db.config'
import {DataTypes} from 'sequelize'

const goodsModel = sequelize.SQL.define('goods',
  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
  })



export default goodsModel