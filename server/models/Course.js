module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define("Course", {
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
        },
        look: {
            type: DataTypes.INTEGER
        },
        url_content: {
            type: DataTypes.STRING,
            require: true,
            comment: "Здесь указывается юрл или тег на видеоурок в ютуб",
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            comment: "Здесь указывается изображение на главный экран"
        }
    }, {
        tableName: 'course'
    });

    Course.associate = function(models) {
        // Course.belongsTo(models.Comment, { foreignKey: "course_comment_id" });
        Course.belongsTo(models.Comment, { foreignKey: "course_comment_id" });
        Course.hasMany(models.User, { foreignKey: "course_id" });
        Course.belongsTo(models.FeatureCourse, { foreignKey: "featured_course_id" });
    }


    return Course;
};