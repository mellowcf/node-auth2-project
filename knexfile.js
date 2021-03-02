module.exports = {
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		// filename: "./data/auth.db3",
		filename: "./data/users.db3",
	},
	migrations: {
		directory: "./data/migrations",
	},
	seeds: {
		directory: "./data/seeds",
	},
	pool: {
		afterCreate: (conn, done) => {
			conn.run("PRAGMA foreign_keys = ON", done)
		},
	},
}