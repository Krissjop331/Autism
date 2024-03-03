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
        description: {
            type: DataTypes.STRING,
            require: true,
        },
        author: {
            type: DataTypes.STRING,
            require: true,
            unique: true
        },
        look: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'forum'
    });


    Forum.associate = function(models) {
        Forum.belongsTo(models.Comment, { foreignKey: "forum_comment_id" });
        Forum.hasMany(models.User, { foreignKey: "forum_id" });
        Forum.hasMany(models.FeatureForum, { foreignKey: "featured_forum_id" });
    }

    return Forum;
};