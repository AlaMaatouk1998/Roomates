module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Wo_Furniture_Categories', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        lang_key: {
            type: DataTypes.STRING(160),
            allowNull: false,
            defaultValue: ""
        }
    }, {
        sequelize,
        tableName: 'Wo_Furniture_Categories'
    });
};