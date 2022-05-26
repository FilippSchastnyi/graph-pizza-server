import userQueries from "../queries/UserQueries";

class UserController {
  async createUser(req, res) {
    const {name, surname} = req.body
    await userQueries.createUser(name, surname).then((customer) => res.json(customer.rows[0]))
  }

  async getAllUsers(req, res) {
    await userQueries.getAllUsers().then((customer) => res.json(customer.rows))
  }

  async getUser(req, res) {
  }

  async updateUser(req, res) {
  }

  async deleteUser(req, res) {
  }
}

export default new UserController();