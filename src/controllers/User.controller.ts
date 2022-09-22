import ApiErrors from "../handlers/ApiErrors";
import userModel from "../models/user.model";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const generateJWT = (id: string, email: string, role: string) => {
  return jwt.sign({
      id,
      email,
      role
    },
    `${process.env.JWT_KEY}`,
    {expiresIn: '12h'})
}

class UserController {
  async registration(req, res, next) {
    const {email, password, role} = req.body
    const isEmailExist = !!await userModel.findOne({where: {email}})
    const hashPassword = await bcrypt.hash(password, 5)

    if (!email || !password) {
      return next(ApiErrors.badRequest('Incorrect email or password.')) //:TODO
    }

    if (isEmailExist) {
      return next(ApiErrors.badRequest("This email address is already in use."))
    }

    const user: any = await UserModel.create({
      email,
      role,
      password: hashPassword
    })
    const token = generateJWT(user.id, email, role)

    return res.json({token})
  }

  async login(req, res, next) {
    const {email, password} = req.body
    const user: any = await userModel.findOne({where: {email}})
    if (!user) {
      return next(ApiErrors.badRequest("This email address doesn't exist."))
    }

    const isPasswordMatch = bcrypt.compareSync(password, user.password)
    if (!isPasswordMatch){
      return next(ApiErrors.badRequest("This password doesn't match."))
    }

    const token = generateJWT(user.id, user.email, user.role)
    return res.json({token})
  }

  async isAuthenticated(req, res, next) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role)
    return res.json({token})
  }
}

export default new UserController();
