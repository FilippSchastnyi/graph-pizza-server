import basketModel from "./basket.model";
import basketPizzaModel from "./basketPizza.model";
import goodsModel from "./goods.model";
import pizzaModel from "./pizza.model";
import ratingModel from "./rating.model";
import userModel from "./user.model";


class SQLModels {
  constructor() {
  }

  initModels = async () => {
    this.setRelations();
    this.createTables()
      .catch((e)=>{console.log(e)})
  }

  setRelations = (): void => {
    /** Basket Model Relations**/
    basketModel.belongsTo(userModel)
    basketModel.hasOne(basketPizzaModel)

    /** BasketPizza Model Relations**/
    basketPizzaModel.hasMany(pizzaModel)
    basketPizzaModel.belongsTo(basketModel)

    /** Goods Model Relations**/
    goodsModel.hasMany(pizzaModel)

    /** Pizza Model Relations**/
    pizzaModel.belongsTo(goodsModel)
    pizzaModel.hasOne(basketPizzaModel)
    pizzaModel.hasOne(ratingModel)

    /** Rating Model Relations**/
    ratingModel.belongsTo(userModel)
    ratingModel.hasMany(userModel)

    /** User Model Relations**/
    userModel.hasOne(basketModel)
    userModel.hasMany(ratingModel)
  }

  createTables = async () => {
    await basketModel.sync()
    await basketPizzaModel.sync()
    await goodsModel.sync()
    await pizzaModel.sync()
    await ratingModel.sync()
    await userModel.sync()
  }

}

export default new SQLModels()