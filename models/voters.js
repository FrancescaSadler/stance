module.exports = function (sequelize, DataTypes) {
  var Voter = sequelize.define("Voter", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    // },
    // lastName: {
    //   type: DataTypes.STRING,
    //   allowNull: true, 
    //   default: ""
    // },
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   default: "",
    //   validate: {
    //     isEmail: true
    //   }
    // },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   default: ""
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
    johnHickenlooper: {
      type:DataTypes.STRING
    },
    julianCastro: {
      type: DataTypes.STRING
    },
    kamalaHarris: {
      type: DataTypes.STRING
    },
    kirstenGillibrand: {
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
  return Voter;
};
