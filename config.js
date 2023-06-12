module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'database-1.cadsdujhcxxt.us-east-1.rds.amazonaws.com',
        user: process.env.MYSQL_USER || 'admin',
        password: process.env.MYSQL_PASS || 'User_2023$',
        database: process.env.MYSQL_DB || 'database-1',
        port: process.env.MYSQL_PORT || 3306,
    },
}