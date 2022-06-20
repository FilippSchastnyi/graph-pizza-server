class UserController {

  async registration(req, res) {

  }

  async login(req, res) {

  }

  async checkIsAuthentication(req, res) {
    const {id} = req.query
    res.json(id)
  }
}

export default new UserController();