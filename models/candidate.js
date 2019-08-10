module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define("Candidate", {
    routeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    candidateName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scores: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  });
  return Candidate;
};
