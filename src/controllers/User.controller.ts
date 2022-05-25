class UserController {
  async createUser(req, res) {
    const {name, surname} = req.body
    console.log(name, surname)
    res.json('ok')
  }

  async getAllUsers(req, res) {
  }

  async getUser(req, res) {
  }

  async updateUser(req, res) {
  }

  async deleteUser(req, res) {
  }
}

export default new UserController();