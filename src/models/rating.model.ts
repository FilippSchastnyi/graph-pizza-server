import {DataTypes} from "sequelize";
import sequelize from "../../db.config"

const ratingModel = sequelize.SQL.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.STRING, unique:true, allowNull: false}
})


export default ratingModel;