module.exports = function(sequelize, DataTypes) {
    var Voter = sequelize.define("Voter", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      bernieSanders: {
          type: DataTypes.STRING
      }
    });
    return Voter;
  };
  