import sequelize from '../../db.config'
import {DataTypes} from "sequelize";
import {USER} from "./Roles.model";

const UserModel = sequelize.SQL.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: USER,
}})