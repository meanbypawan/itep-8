import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Category = sequelize.define("category",{
   id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   slug:{
    type: DataTypes.STRING,
    allowNull: false
   },
   url:{
    type: DataTypes.STRING
   },
   name:{
    type:DataTypes.STRING,
    allowNull: false,
    trim: true
   }
});

export default Category; 