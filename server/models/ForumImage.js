module.exports = (sequelize, DataTypes) => {
    const ForumImage = sequelize.define("ForumImage", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'forum_image',
        timestamps: false
    });


    ForumImage.associate = function(models) {
        ForumImage.hasMany(models.Forum, { foreignKey: "forum_image_id" });
    }

    return ForumImage;
};