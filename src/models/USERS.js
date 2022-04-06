const {sequelize,DataTypes,Model} = require('../config/db.config');

class USERS extends Model {}

USERS.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    F_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },    
    M_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    L_NAME: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MOBILE_NO: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
    },
    EMAIL_ID: {
      type: DataTypes.STRING(30),
      allowNull: true,
      validate:{
        isEmail:true
      }
    },
    PARENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'USERS',
    timestamps: true,
});

// table relateion
// USERS.hasMany(USER_POST,{
//   foreignKey:'USER_ID',sourceKey:'ID'
// });

module.exports.USERS = USERS;
