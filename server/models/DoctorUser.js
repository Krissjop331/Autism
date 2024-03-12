module.exports = (sequelize, DataTypes) => {
    const DoctorUser = sequelize.define("DoctorUser", {}, {
        timestamps: false,
        tableName: 'doctor'
    });

    return DoctorUser;
};