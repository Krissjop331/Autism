module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            require: true,
        },
        last_name: {
            type: DataTypes.STRING,
            require: true,
        },
        login: {
            type: DataTypes.STRING,
            unique: true,
            allownNull: false
        },
        email: {
            type: DataTypes.STRING,
            require: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            require: true,
            min: 6
        },
        birthday: {
            type: DataTypes.DATE
        },
        avatar_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone_number: {
            type: DataTypes.INTEGER,
            max: 12,
            allowNull: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        dislikes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        blocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: 'users'
    });

    User.associate = function(models) {
        User.belongsTo(models.Role, { foreignKey: "role_id" });

        // PARENTS
        User.belongsToMany(User, { as: 'children', foreignKey: 'parent_id', through: 'ParentsUsers' });
        User.belongsToMany(User, { as: 'parents', foreignKey: 'child_id', through: 'ParentsUsers' });

        // DOCTOR
        User.belongsToMany(User, { as: 'patients', foreignKey: 'doctor_id', through: 'DoctorUser' }); 
        User.belongsToMany(User, { as: 'guardians', foreignKey: 'child_id', through: 'DoctorUser' }); 

        // Friends
        User.belongsToMany(User, { as: 'friends', foreignKey: 'friend_id', through: 'FriendsUser' }); 
        User.belongsToMany(User, { as: 'users', foreignKey: 'user_id', through: 'FriendsUser' }); 

        // DIAGNOSIS
        User.hasMany(models.DiagnosisTestResult, {foreignKey: 'test_result_id'});
        User.hasMany(models.UserDiagnosis, {foreignKey: 'user_diagnosis_id'});

        // POSTS
        User.hasMany(models.Posts, {foreignKey: 'post_id'});
        User.hasMany(models.CommentPost, {foreignKey: 'comment_id'});
        User.hasMany(models.FeaturedPost, {foreignKey: 'featured_posts_id'});
    }

    return User;
};