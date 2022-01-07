const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "dbt",
};
async function connectiionCheck() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    await connection.endasync();
}

async function addUser(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `insert into user values(?,?)`;
    await connection.queryAsync(sql, [user.name]);
    console.log("record Added");

    await connection.endAsync();
}

let user = {
    name: "Sangram"
}

async function showUser() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAync();

    let sql = `select * from user`;
    let list = await connection.queryAsync(sql, []);

    await connection.endAsync();
    return list;
}

showUser();
module.exports = { showUser, addUser };