module.exports = (sequelize, DataTypes) => {
    const Resources = sequelize.define("Resources", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
        },
        file_patch: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'resources'
    });

    Resources.associate = function(models) {
        Resources.belongsTo(models.ResourcesType, { foreignKey: "type_id" });
        Resources.belongsTo(models.ResourcesModule, { foreignKey: "module_id" });
    }

    return Resources;
};