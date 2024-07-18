import { FORMAT } from 'sqlite3'
import db from '../db/index.js'

class User {
  static async findAll() {
    const query = `
      select id, username, firstName, lastName, email, avatar 
      from users;
    `
    const results = await db.raw(query)
    return results
  }

  static async findById(id) {
    const query = `
      SELECT id, username, firstName, lastName, email, avatar
      FROM users
      WHERE id = ?;
    `
    const results = await db.raw(query, [id])
    return results[0]
  }



static async createUser(username, firstName, lastName, email, avatar = '', password) {
  const query = `
    INSERT INTO users (username, firstName, lastName, email, avatar, password)
    VALUES (?, ?, ?, ?, ?, ?) RETURNING *;
  `
  const addedUser = await db.raw(query, [
    username, firstName, lastName, email, avatar, password
  ])
  
  return results[0]}
}


export default User
