import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
const Reviews = sequelize.define("review",{
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    data: DataTypes.STRING,
    reviewerName: DataTypes.STRING,
    reviewerEmail: DataTypes.STRING,
    productId: DataTypes.INTEGER
});

export default Reviews;