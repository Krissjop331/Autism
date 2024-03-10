module.exports = (sequelize, DataTypes) => {
    const Forum = sequelize.define("Forum", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            require: true,
        },
        short_description: {
            type: DataTypes.STRING,
            require: true,
            min: 255
        },
        look: {
            type: DataTypes.INTEGER
        },
    }, {
        tableName: 'forum'
    });


    Forum.associate = function(models) {
        Forum.belongsTo(models.Comment, { foreignKey: "forum_comment_id" });
        Forum.belongsTo(models.User, { foreignKey: "user_id" });
        Forum.hasMany(models.FeatureForum, { foreignKey: "forum_id" });
        Forum.belongsTo(models.ForumText, {foreignKey: "forum_text_id"});
        Forum.belongsTo(models.ForumImage, {foreignKey: "forum_image_id"});
        Forum.belongsTo(models.ForumImage, {foreignKey: "forum_link_id"});
    }

    return Forum;
};