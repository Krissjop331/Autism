module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define("Likes", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN
        },
    }, {
        tableName: 'likes',
        timestamps: false
    });

    Likes.associate = function(models) {
        Likes.belongsTo(models.User, { as: 'liked_user', foreignKey: 'liked_user_id' }); 
        Likes.belongsTo(models.User, { as: 'likedByUserAssociation', foreignKey: 'liked_by_user' });
    }

    return Likes;
};