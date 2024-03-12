module.exports = (sequelize, DataTypes) => {
    const ResourcesType = sequelize.define("ResourcesType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
        },
        
    }, {
        tableName: 'resources_type',
        timestamps: false
    });

    ResourcesType.associate = function(models) {
        ResourcesType.hasMany(models.Resources, { foreignKey: "type_id" });
    }

    return ResourcesType;
};