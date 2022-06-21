module.exports = (sequelize, dataTypes) => {

        let alias = 'Movie'; // esto debería estar en singular
         
        let cols = {

            id: {
                type: dataTypes.INTEGER(10),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },

            title: {
                type: dataTypes.STRING(500),
                allowNull: false
            },
            rating: {
                type: dataTypes.DECIMAL(3, 1).UNSIGNED,
                allowNull: false
            },
            awards: {
                type: dataTypes.BIGINT(10).UNSIGNED,
                allowNull: false
            },
            release_date: {
                type: dataTypes.DATEONLY,
                allowNull: false
            },
            length: {
                type: dataTypes.BIGINT(10),
                allowNull: true
            },

            genre_id: {
                type: dataTypes.BIGINT(10),
                allowNull: true
            }

            }
    

        let config = {
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: false,
            underscored: true
        }
    

const Movie = sequelize.define(alias,cols,config);


return Movie

    }



