module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'platzi.cadsdujhcxxt.us-east-1.rds.amazonaws.com',
        user: process.env.MYSQL_USER || 'admin',
        password: process.env.MYSQL_PASS || 'User_2023$',
        database: process.env.MYSQL_DB || 'sys',
        port: process.env.MSQL_PORT || 3306,
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    }
}