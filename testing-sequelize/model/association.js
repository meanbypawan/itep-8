import Product from "./product.model.js";
import Reviews from "./reviews.model.js";

Product.hasMany(Reviews,{foreignKey: "productId"});
Reviews.belongsTo(Product);

export {Product,Reviews};
