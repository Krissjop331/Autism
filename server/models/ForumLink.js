module.exports = (sequelize, DataTypes) => {
    const ForumLink = sequelize.define("ForumLink", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        link_url: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'forum_link',
        timestamps: false
    });


    ForumLink.associate = function(models) {
        ForumLink.hasMany(models.Forum, { foreignKey: "forum_link_id" });
    }

    return ForumLink;
};