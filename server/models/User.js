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
        blocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: 'users'
    });

    User.associate = function(models) {
        User.belongsTo(models.Role, { foreignKey: "role_id" });
        User.hasMany(models.Forum, { foreignKey: "forum_id" });
        User.hasMany(models.Comment, {foreignKey: "user_id" });
        User.hasMany(models.Course, {foreignKey: "course_id" });
        User.hasMany(models.FeatureCourse, {foreignKey: "user_id" });
        User.hasMany(models.FeatureForum, {foreignKey: "user_id" });
    }

    return User;
};