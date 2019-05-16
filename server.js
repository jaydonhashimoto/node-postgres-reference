const { Pool } = require('pg');

//establish connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'admin',
    port: 5433,
})

//connect via connection string
/**
 * const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
 * const pool = new Pool({
 * connectionString: connectionString,
 * })
 */

//insert
pool.query('INSERT INTO testtable (id, name) VALUES ($1, $2)', [2, 'barry'], (error, result) => {
    if (error) {
        console.log(error)
    }
    console.log(`User added with ID: ${result}`)
})

//select
pool.query('SELECT * FROM testtable', (err, res) => {
    if (err) {
        console.log(err)
    }
    console.log(res.rows)
})

//update
pool.query(
    'UPDATE testtable SET name = $1 WHERE id = $2',
    ['ron', 2],
    (error, results) => {
        if (error) {
            throw error
        }
        console.log(results);
    }
)

//view
pool.query('SELECT * FROM testtable', (err, res) => {
    if (err) {
        console.log(err)
    }
    console.log(res.rows)
})

//delete
pool.query('DELETE FROM testtable WHERE id = $1', [1], (error, results) => {
    if (error) {
        console.log(error)
    }
    console.log('user deleted')
})
