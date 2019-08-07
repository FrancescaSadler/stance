module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define("Candidate", {
    candidateName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scores: {
      type: DataTypes.STRING
    }
  });
  return Candidate;
};
