import knex from 'knex'
import { fileURLToPath } from 'url'

/**
 * TODO: Follow the steps required to connect to the database using knex
 * Make sure your default export is a const called db
 */
const dbPath = new URL('./db.sqlite', import.meta.url)

const db = knex({
  client: 'sqlite3',
  connection: {filename: fileURLToPath(dbPath)},
	useNullAsDefault: true
})

export default db

/**
 * TODO: Follow the steps required to connect to the database using knex
 * Make sure your default export is a const called db
 */
