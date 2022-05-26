import db from '../../db.config'

class UserQueries {
  createUser = async (name, surname) => await db.query(`INSERT INTO customer (name, surname) values ($1, $2) RETURNING *`, [name, surname])
  getAllUsers = async () => await db.query(`SELECT * FROM customer`)
}


export default new UserQueries()