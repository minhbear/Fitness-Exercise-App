module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNullL: false
        }
    });

    return Comments;
}