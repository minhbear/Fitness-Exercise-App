module.exports = (sequelize, DataTypes) => {
    const Blogs = sequelize.define("Blogs", {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Blogs.associate = (models) => {
        Blogs.hasMany(models.Comments, {
            onDelete: "cascade"
        })
    }

    return Blogs;
}