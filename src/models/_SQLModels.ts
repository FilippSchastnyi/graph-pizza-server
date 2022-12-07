import goodsModel from "./goods.model";
import specificationModel from "./specification.model";
import categoryModel from "./category.model";
import { info } from "console";

class SQLModels {
  constructor() {
  }

  initModels = () => {
    this.setRelations();
    this.syncTables()
  }

   setRelations() {
    /** Goods Model Model Relations**/

    specificationModel.belongsTo(goodsModel)
    goodsModel.hasMany(specificationModel, {
      as: "info"
    })

    categoryModel.hasMany(goodsModel)
    goodsModel.belongsTo(categoryModel)
  }

  syncTables = () => {
    specificationModel.sync()
    goodsModel.sync()
    categoryModel.sync()
  }
}

export default new SQLModels()
