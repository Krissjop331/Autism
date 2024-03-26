module.exports = (sequelize, DataTypes) => {
    const Dislikes = sequelize.define("Dislikes", {
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
        tableName: 'dislikes',
        timestamps: false
    });

    Dislikes.associate = function(models) {
        Dislikes.belongsTo(models.User, { as: 'disliked_user', foreignKey: 'disliked_user_id' }); 
        Dislikes.belongsTo(models.User, { as: 'dislikedByUserAssociation', foreignKey: 'disliked_by_user' });
    }

    return Dislikes;
};