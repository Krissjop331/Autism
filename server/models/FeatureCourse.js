module.exports = (sequelize, DataTypes) => {
    const FeatureCourse = sequelize.define("FeatureCourse", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'featured_course'
    });

    FeatureCourse.associate = function(models) {
        FeatureCourse.belongsTo(models.User, { foreignKey: "user_id" });
        FeatureCourse.belongsTo(models.Course, { foreignKey: "course_id" });
        // Course.belongsTo(models.FeaturedCourse, { foreignKey: "featured_course_id" });
    }


    return FeatureCourse;
};