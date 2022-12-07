import goodsModel from "../models/goods.model";
import path from "path";
import ApiErrors from "../handlers/ApiErrors";
import {v4 as uuid} from "uuid";
import categoryModel from "../models/category.model";
import specificationModel from "../models/specification.model";

class GoodsController {

  async getAll(req, res, next) {
    const goods = await goodsModel.findAll({
      attributes: ["id", "name", "rating", "image", "description"],
      include: [
        {
          model: categoryModel,
          as: 'category',
          attributes: ["name"],
        },
        {
          model: specificationModel,
          as: 'info',
          attributes: ['id', 'weight', 'protein', 'calories', 'fats', 'price', 'size'],
        }
      ]
    })
    return res.json(goods)
  }

  async getOne(req, res, next) {
    const goods = await goodsModel.findAll()
    return res.json(goods)
  }

  async create(req, res, next) {
    try {
      const {name, rating, description, categoryId} = req.body
      const {image} = req.files
      let fileName = uuid() + ".jpg"
      image.mv(path.resolve(__dirname, '..', '..', 'static/images', fileName))
      const goods = await goodsModel.create({
        name,
        rating,
        description,
        categoryId,
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
