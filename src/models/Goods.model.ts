import sequelize from '../../db.config'
import {DataTypes} from 'sequelize'

const GoodsModel = sequelize.SQL.define('goods',
  {
    id: {type: DataTypes.STRING, primaryKey: true, autoIncrement:true},
    type: {type: DataTypes.STRING, unique: true, allowNull: false}
  })