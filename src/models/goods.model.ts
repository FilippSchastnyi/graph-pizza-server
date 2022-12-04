import DataBase from '../../db.config'
import {DataTypes} from 'sequelize'

const goodsModel = DataBase.sequelize.define('goods',
  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    image: {type: DataTypes.STRING, allowNull: false},
  })

export default goodsModel
