import {DataTypes} from "sequelize";
import sequelize from "../../db.config"
import userModel from "./user.model";

const ratingModel = sequelize.SQL.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.STRING, unique:true, allowNull: false}
})

ratingModel.belongsTo(userModel)
ratingModel.hasMany(userModel)

export default ratingModel;