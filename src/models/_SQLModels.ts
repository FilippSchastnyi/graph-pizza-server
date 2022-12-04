import goodsModel from "./goods.model";
import goodsSpecificationModel from "./goods-specification.model";
import goodsCategoryModel from "./goods-category.model";
import sizeModel from "./size.model";
import goodsSizeModel from "./goods-size.model";

class SQLModels {
  constructor() {
  }

  initModels = async () => {
    this.syncTables()
      .catch((e) => {
        console.log(e)
      })
    this.setRelations();
  }

  setRelations = (): void => {
    /** Goods Model Model Relations**/
    goodsModel.hasOne(goodsSpecificationModel)
    goodsSpecificationModel.belongsTo(goodsModel)

    goodsModel.belongsToMany(sizeModel, {through: goodsSizeModel})
    sizeModel.belongsToMany(goodsModel, {through: goodsSizeModel})

    goodsModel.hasMany(goodsCategoryModel)
    goodsCategoryModel.belongsTo(goodsModel)
  }

  syncTables = async () => {
        await goodsModel.sync()
        await goodsSpecificationModel.sync()
        await sizeModel.sync()
        await goodsCategoryModel.sync()
        await goodsSizeModel.sync()
  }
}

export default new SQLModels()
