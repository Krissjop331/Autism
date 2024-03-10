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
        FeatureForum.belongsTo(models.User, { foreignKey: "user_id" });
        FeatureForum.belongsTo(models.Forum, { foreignKey: "forum_id" });
        // Course.belongsTo(models.FeaturedCourse, { foreignKey: "featured_course_id" });
    }


    return FeatureForum;
};