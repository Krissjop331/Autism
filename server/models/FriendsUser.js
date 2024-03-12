module.exports = (sequelize, DataTypes) => {
    const FriendsUser = sequelize.define("FriendsUser", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN
        }
    }, {
        timestamps: false,
        tableName: 'friends'
    });

    return FriendsUser;
};