module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comment", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'comment'
    });

    Comment.associate = function(models) {
        Comment.hasMany(models.Forum, { foreignKey: "forum_comment_id" });
        Comment.belongsTo(models.User, { foreignKey: "user_id" });
        // Comment.hasMany(models.Course, { foreignKey: "course_comment_id" });
        Comment.hasMany(models.Course, { foreignKey: "course_comment_id" });
    }

    return Comment;
};