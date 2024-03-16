module.exports = (sequelize, DataTypes) => {
    const Tags = sequelize.define("Tags", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(50),
            max: 50
        },
    }, {
        tableName: 'tags'
    });

    Tags.associate = function(models) {
        Tags.hasMany(models.Posts, { foreignKey: "post_id" });
        Tags.hasMany(models.Forum, { foreignKey: "forum_id" });
    }

    return Tags;
};