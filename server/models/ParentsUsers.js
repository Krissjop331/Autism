module.exports = (sequelize, DataTypes) => {
    const ParentsUsers = sequelize.define("ParentsUsers", {}, {
        timestamps: false,
        tableName: 'parents'
    });

    return ParentsUsers;
};