module.exports = (sequelize, DataTypes) => {
    const ParentsUsers = sequelize.define("ParentsUsers", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    }, {
        timestamps: false,
        tableName: 'parents_users'
    });

    return ParentsUsers;
};