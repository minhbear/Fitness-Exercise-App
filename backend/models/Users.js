module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Users.associate = (models) => {
        Users.hasMany(models.Blogs, {
            onDelete: "cascade"
        })

        Users.hasMany(models.Comments, {
            onDelete: "cascade"
        })
    }

    return Users;
}