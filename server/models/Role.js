module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("Role", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false,
        tableName: 'role'
    });


    Role.associate = function(models) {
        Role.hasOne(models.User, { foreignKey: "role_id" });
    }

    return Role;
};