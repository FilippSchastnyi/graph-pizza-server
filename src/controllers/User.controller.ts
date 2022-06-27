import ApiErrors from "../handlers/ApiErrors";
import userModel from "../models/user.model";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'


class UserController {

  async registration(req, res, next) {
    const {email, password, role} = req.body
    if (!email || !password) {
      return next(ApiErrors.badRequest('Incorrect email or password. Please, try again'))
    }

    const isEmailExist = await userModel.findOne({where: {email}})

    if (isEmailExist) {
      return next(ApiErrors.badRequest("This email address is already in use. Please, try again"))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user: any = await UserModel.create({
      email, role, password: hashPassword
    })
    const token = jwt.sign({id: user.id, email, role},
      `${process.env.JWT_KEY}`,
      {expiresIn: '12h'})
    return res.json({token})
  }

  async login(req, res, next) {
    const {email, password} = req.body
    const isEmailExist = userModel.findOne({where: email})
  }

  async checkIsAuthentication(req, res, next) {
    const {id} = req.query
    if (!id) {
      next(ApiErrors.badRequest('Please, provide an id'))
      return null
    }
    res.json(id)
  }
}

export default new UserController();