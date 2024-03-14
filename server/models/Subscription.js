module.exports = (sequelize, DataTypes) => {
    const Subscription = sequelize.define("Subscription", {}, {
        tableName: 'subscription'
    });

    return Subscription;
};