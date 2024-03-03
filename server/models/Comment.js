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
        Comment.hasMany(models.User, { foreignKey: "comment_id" });
        // Comment.hasMany(models.Course, { foreignKey: "course_comment_id" });
        Comment.hasMany(models.Course, { foreignKey: "course_comment_id" });
    }

    return Comment;
};