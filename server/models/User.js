module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(50),
            require: true,
            max: 50
        },
        last_name: {
            type: DataTypes.STRING(50),
            require: true,
            max: 50
        },
        login: {
            type: DataTypes.STRING(80),
            unique: true,
            allownNull: false,
            max: 80
        },
        email: {
            type: DataTypes.STRING(80),
            require: true,
            unique: true,
            max: 80
        },
        password: {
            type: DataTypes.STRING(80),
            require: true,
            min: 6,
            max: 80
        },
        birthday: {
            type: DataTypes.DATE
        },
        avatar_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone_number: {
            type: DataTypes.STRING(13),
            allowNull: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        status: {
            type: DataTypes.STRING(50),
            defaultValue: 'loading'
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

        // PARENTSe
        User.belongsToMany(User, { as: 'children', foreignKey: 'parent_id', through: 'ParentsUsrs' });
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

        // SUBSCRIPTION
        User.belongsToMany(User, { as: 'user', foreignKey: 'user_id', through: 'Subscription' }); 
        User.belongsToMany(User, { as: 'author', foreignKey: 'author_id', through: 'Subscription' }); 

        // HISTORY
        User.hasMany(models.HistoryVisit, { foreignKey: 'history_id' }); 

        // FORUM
        User.hasMany(models.Topics, { foreignKey: 'topics_id' }); 
        User.hasMany(models.CommentTopics, { foreignKey: 'comment_topics_id' }); 
        User.hasMany(models.FeaturedForum, {foreignKey: 'featured_forum_id'});
    }

    return User;
};