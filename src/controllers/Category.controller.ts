import categoryModel from "../models/category.model";

class CategoryController {
  async postNewCategory(req, res): Promise<any>{
    const {name} = req.body;
    const newCategory = await categoryModel.create({
      name
    })
    return res.json(newCategory)
  }
}

export default new CategoryController()
