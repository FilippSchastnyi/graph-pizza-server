import basketModel from "./basket.model";
import basketPizzaModel from "./basketPizza.model";
import goodsModel from "./goods.model";
import pizzaModel from "./pizza.model";
import ratingModel from "./rating.model";
import userModel from "./user.model";

const initModels = async () => {
  await userModel.sync()
  await basketModel.sync();
  await basketPizzaModel.sync();
  await goodsModel.sync();
  await pizzaModel.sync();
  await ratingModel.sync()
}

export default initModels