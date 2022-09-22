import {DataTypes} from "sequelize";
import DataBase from "../../db.config"

const rateModel = DataBase.sequelize.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.STRING, unique:true, allowNull: false}
})

export default rateModel;
