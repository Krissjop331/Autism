module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            require: true,
        },
        last_name: {
            type: DataTypes.STRING,
            require: true,
        },
        login: {
            type: DataTypes.STRING,
            unique: true,
            allownNull: false
        },
        email: {
            type: DataTypes.STRING,
            require: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            require: true,
            min: 6
        },
        birthday: {
            type: DataTypes.DATETIME
        },
        avatar_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone_number: {
            type: DataTypes.INTEGER,
            max: 12,
            allowNull: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        dislikes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        blocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: 'users'
    });

    User.associate = function(models) {
        User.belongsTo(models.Role, { foreignKey: "role_id" });
    }

    return User;
};