module.exports = (sequelize, DataTypes) => {
    const FeatureForum = sequelize.define("FeatureForum", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'featured_forum'
    });

    FeatureForum.associate = function(models) {
        FeatureForum.hasMany(models.User, { foreignKey: "featured_forum_id" });
        FeatureForum.hasMany(models.Forum, { foreignKey: "featured_forum_id" });
        // Course.belongsTo(models.FeaturedCourse, { foreignKey: "featured_course_id" });
    }


    return FeatureForum;
};