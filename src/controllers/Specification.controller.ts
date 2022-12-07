import SpecificationModel from "../models/specification.model";

class SpecificationController {
  async create(req, res){
    const {weight, protein, calories, fats, price, size, goodId} = req.body
    const specification = await SpecificationModel.create({
      weight,
      protein,
      calories,
      fats,
      price,
      size,
      goodId
    })
    return res.json(specification)
  }
}

export default new SpecificationController()
