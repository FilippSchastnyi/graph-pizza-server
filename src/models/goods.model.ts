import DataBase from '../../db.config'
import {DataTypes} from 'sequelize'

const goodsModel = DataBase.sequelize.define('goods',
  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    image: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
  })

export default goodsModel
