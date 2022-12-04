import goodsModel from "../models/goods.model";
import path from "path";
import ApiErrors from "../handlers/ApiErrors";
import {v4 as uuid} from "uuid";

class GoodsController {

  async getAll(req, res, next) {
    const goods = await goodsModel.findAll()
    return res.json(goods)
  }

  async create(req, res, next) {
    try {
      const {name, price, rating, info} = req.body
      const {image} = req.files
      let fileName = uuid() + ".jpg"
      image.mv(path.resolve(__dirname, '..', '..', 'static/images', fileName))
      const goods = await goodsModel.create({
        name,
        price,
        rating,
        info,
        image: fileName
      })
      return res.json(goods)
    }
    catch (e: any) {
      next(ApiErrors.badRequest(e.message))
    }
  }

}

export default new GoodsController();
