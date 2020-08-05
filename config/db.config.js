module.exports = {
    HOST: "localhost",
    USER: "for_test1",
    PASSWORD: "for_test1!",
    DB: "NODE_TEST1",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
