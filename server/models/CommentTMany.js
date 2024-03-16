module.exports = (sequelize, DataTypes) => {
    const CommentTMany = sequelize.define("CommentTMany", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
        }
    }, {
        tableName: 'comment_t_many'
    });

    return CommentTMany;
};