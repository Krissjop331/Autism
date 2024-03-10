module.exports = (sequelize, DataTypes) => {
    const ForumText = sequelize.define("ForumText", {
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
        tableName: 'forum_text',
        timestamps: false
    });


    ForumText.associate = function(models) {
        ForumText.hasMany(models.Forum, { foreignKey: "forum_text_id" });
    }

    return ForumText;
};