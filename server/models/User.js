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
        User.belongsTo(models.Forum, { foreignKey: "forum_id" });
        User.belongsTo(models.Comment, {foreignKey: "comment_id" });
        User.belongsTo(models.Course, {foreignKey: "course_id" });
        User.belongsTo(models.FeatureCourse, {foreignKey: "featured_course_id" });
        User.belongsTo(models.FeatureForum, {foreignKey: "featured_forum_id" });
    }

    return User;
};