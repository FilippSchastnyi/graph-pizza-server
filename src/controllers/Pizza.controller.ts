import PizzaModel from "../models/pizza.model";
import ApiErrors from "../handlers/ApiErrors";
import { v4 as uuid } from 'uuid';
import path from "path";

class PizzaController {

  async createOne(req, res, next) {
    try {
      console.log(req)
      const {name, price, description, count, rate} = req.body
      const {image} = req.files
      let fileName = uuid() + ".jpg"
      image.mv(path.resolve(__dirname, '..', '..', 'static', fileName))
      const pizza = await PizzaModel.create({name, price, description, count, rate, image: fileName})
      return res.json(pizza);

    } catch (e: any) {
      return next(ApiErrors.badRequest(e.message))
    }
  }

  async getAll(req, res) {

  }

  async getOne(req, res) {

  }
}

export default new PizzaController();