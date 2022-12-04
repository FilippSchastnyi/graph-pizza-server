import DataBase from '../../db.config'
import {DataTypes} from 'sequelize'

const goodsSizeModel = DataBase.sequelize.define('goods_size',
  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  })

export default goodsSizeModel
