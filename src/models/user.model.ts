import DataBase from '../../db.config'
import {DataTypes} from "sequelize";
import roles from "./roles.model";

const userModel = DataBase.sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {
    type: DataTypes.STRING, defaultValue: roles.USER,
  }
})

export default userModel;
