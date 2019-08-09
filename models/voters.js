module.exports = function (sequelize, DataTypes) {
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
    amyKlobuchar: {
      type: DataTypes.STRING
    },
    andrewYang: {
      type: DataTypes.STRING
    },
    bernieSanders: {
      type: DataTypes.STRING
    },
    betoOrourke: {
      type: DataTypes.STRING
    },
    coryBooker: {
      type: DataTypes.STRING
    },
    donaldTrump: {
      type: DataTypes.STRING
    },
    elizabethWarren: {
      type: DataTypes.STRING
    },
    jayInslee: {
      type: DataTypes.STRING
    },
    joeBiden: {
      type: DataTypes.STRING
    },
    johnDelaney: {
      type: DataTypes.STRING
    },
    johnHickenloop: {
      type:DataTypes.STRING
    },
    julianCastro: {
      type: DataTypes.STRING
    },
    kamalaHarris: {
      type: DataTypes.STRING
    },
    kristenGillibrand: {
      type: DataTypes.STRING
    },
    marianneWilliamson: {
      type:DataTypes.STRING
    },
    peteButtigieg: {
      type: DataTypes.STRING
    },
    tulsiGabbard: {
      type: DataTypes.STRING
    }
  });
  return Voter;
};
