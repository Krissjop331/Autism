module.exports = (sequelize, DataTypes) => {
    const CommentTopics = sequelize.define("CommentTopics", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
        },
        likes: {
            type: DataTypes.INTEGER
        },
        dislikes: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'comment_topics'
    });


    CommentTopics.associate = function(models) {
        CommentTopics.hasMany(models.Topics, { foreignKey: "topics_id" });
        CommentTopics.belongsTo(models.User, { foreignKey: "author_id" });
    }

    return CommentTopics;
};