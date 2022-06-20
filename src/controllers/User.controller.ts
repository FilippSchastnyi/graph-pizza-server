import ApiErrors from "../handlers/ApiErrors";


class UserController {

  async registration(req, res) {

  }

  async login(req, res) {

  }

  async checkIsAuthentication(req, res, next) {
     const {id} = req.query
    if (!id){
      next(ApiErrors.badRequest('Please, provide an id'))
      return null
    }
    res.json(id)
  }
}

export default new UserController();