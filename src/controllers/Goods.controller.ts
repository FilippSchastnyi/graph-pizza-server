import goodsModel from "../models/goods.model";

class GoodsController {

  async getAll(req, res) {
  }

  async createGoods(req, res) {
    const name = req.body.name
     await goodsModel.create({
      name,
    }).catch((e)=>{
       console.log(e)})
    return res.json({name})
  }

}

export default new GoodsController();
