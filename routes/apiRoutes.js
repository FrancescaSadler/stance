var db = require("../models");
var _ = require('lodash');

module.exports = function (app) {
  // Get all examples
  app.get("/api/voters", function (req, res) {
    db.Voter.findAll({

    }).then(function (voters) {
      res.json(voters);
    });
  });

  // Create a new voter
  app.post("/api/voters", function (req, res) {
    // console.log("API voters route was hit");
    // console.log(req.body);
    var firstName = req.body.name;
    var userScore = req.body['scores[]'];
    var scoresArr = [];
    console.log("userScore", userScore);
    console.log("userScore[0]", typeof userScore[0]);

  db.Candidate.findAll({}).then(function(candidates) {
    console.log("candidates", candidates);
    console.log("candidates[0]", candidates[0]);

    var candidateScores = candidates[0].scores.split(",")
    console.log("candidates[0]", typeof candidateScores[0]);
    

    for (var i = 0; i < candidates.length; i++) {
      var scoreDiff = 0;
      var candidateScores = candidates[i].scores.split(",");
      console.log(`candidate scores: ${candidateScores}`);
      for (var j = 0; j < candidateScores.length; j++) {
        scoreDiff += (Math.abs(parseInt(candidateScores[j]) - parseInt(userScore[j])))
        // console.log(scoreDiff);
      }
      
      scoresArr.push(scoreDiff);
      console.log("scores array" , scoresArr);
      console.log(typeof scoresArr[1]);
  };
    console.log(req.body);
    
    var newVoter = {
      firstName: firstName,
      amyKlobuchar: `${100 - scoresArr[0]}`,
      andrewYang: `${100 - scoresArr[1]}`,
      bernieSanders: `${100 - scoresArr[2]}`,
      betoOrourke: `${100 - scoresArr[3]}`,
      coryBooker: `${100 - scoresArr[4]}`,
      donaldTrump: `${100 - scoresArr[5]}`,
      elizabethWarren: `${100 - scoresArr[6]}`,
      jayInslee: `${100 - scoresArr[7]}`,
      joeBiden: `${100 - scoresArr[8]}`,
      johnDelaney: `${100 - scoresArr[9]}`, 
      johnHickenlooper: `${100 - scoresArr[10]}`,
      julianCastro: `${100 - scoresArr[11]}`,
      kamalaHarris: `${100 - scoresArr[12]}`,
      kirstenGillibrand: `${100 - scoresArr[13]}`,
      marianneWilliamson: `${100 - scoresArr[14]}`,
      peteButtigieg: `${100 - scoresArr[15]}`,
      tulsiGabbard: `${100 - scoresArr[16]}`
    };
    console.log(`new Voter created WOO: ${newVoter}`)
    
    db.Voter.create(newVoter).then(function(newVoter) {
      res.send(newVoter);
    });
    
  });
  });


  // CANDIDATES

  app.get("/api/candidates", function (req, res) {
    db.Candidate.findAll({}).then(function (candidates) {
      res.json(candidates);
    });
  });

  app.post("/api/candidates", function (req, res) {
    var { routeName, candidateName, scores }
      = req.body;

    var newCandidate = {
      routeName,
      candidateName,
      scores,
    };


    db.Candidate.create(newCandidate).then(function (Candidate) {
      console.log(`Added contact ${Candidate.candidateName} ${Candidate.scores}`)
      res.json({ id: Candidate.id })
    })
  });

  // CANDIDATE
  app.post("/api/candidate/:id", function (req, res) {
    db.Candidate.create({ where: { id: req.params.id } }).then()
  })


  app.get("/results/:id", function(rec,res){
    db.Voter.findOne({
      where: {
        id: rec.params.id,
      }
    }).then(function(dbVoter){
      var sortingObj = [
      {"name": "amyKlobuchar", "score": `${parseFloat(dbVoter.dataValues.amyKlobuchar)}`},
      {"name": "andrewYang", "score": `${parseFloat(dbVoter.dataValues.andrewYang)}`},
      {"name": "bernieSanders", "score": `${parseFloat(dbVoter.dataValues.bernieSanders)}`},
      {"name": "betoOrourke", "score": `${parseFloat(dbVoter.dataValues.betoOrourke)}`},
      {"name": "coryBooker", "score": `${parseFloat(dbVoter.dataValues.coryBooker)}`},
      {"name": "donaldTrump", "score": `${parseFloat(dbVoter.dataValues.donaldTrump)}`},
      {"name": "elizabethWarren", "score": `${parseFloat(dbVoter.dataValues.elizabethWarren)}`},
      {"name": "jayInslee", "score": `${parseFloat(dbVoter.dataValues.jayInslee)}`},
      {"name": "joeBiden", "score": `${parseFloat(dbVoter.dataValues.joeBiden)}`},
      {"name": "johnDelaney", "score": `${parseFloat(dbVoter.dataValues.johnDelaney)}`},
      {"name": "johnHickenlooper", "score": `${parseFloat(dbVoter.dataValues.johnHickenlooper)}`},
      {"name": "julianCastro", "score": `${parseFloat(dbVoter.dataValues.julianCastro)}`},
      {"name": "kamalaHarris", "score": `${parseFloat(dbVoter.dataValues.kamalaHarris)}`},
      {"name": "kirstenGillibrand", "score": `${parseFloat(dbVoter.dataValues.kirstenGillibrand)}`},
      {"name": "marianneWilliamson", "score": `${parseFloat(dbVoter.dataValues.marianneWilliamson)}`},
      {"name": "peteButtigieg", "score": `${parseFloat(dbVoter.dataValues.peteButtigieg)}`},
      {"name": "tulsiGabbard", "score": `${parseFloat(dbVoter.dataValues.tulsiGabbard)}`}
    ];

      var sorted = _.orderBy(sortingObj, ["score"], ['desc']);
      var hbsObj = {voter: sorted};
      res.render("results", hbsObj);
    });
  });
};
