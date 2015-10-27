var sequelize = new Sequelize('fishtail', 'fish', 'fish', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 50,
        min: 20,
        idle: 10000
    }
});