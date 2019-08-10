var db = require("../models");

// var candidates = [{
//   "id": 1,
//   "routeName": "amyklobuchar",
//   "candidateName": "Amy Klobuchar",
//   "scores": "1,5,1,4,2,2,4,1,5,1,1,2,3,2,3,2,5,4,1,4,1,3,5,2,1",
//   "createdAt": "2019-08-08T23:20:59.000Z",
//   "updatedAt": "2019-08-08T23:20:59.000Z"
// },
// {
//   "id": 2,
//   "routeName": "andrewYang",
//   "candidateName": "Andrew Yang",
//   "scores": "2,2,5,2,1,1,3,1,3,5,2,4,3,4,3,3,1,5,1,1,1,5,5,2,1",
//   "createdAt": "2019-08-08T23:21:30.000Z",
//   "updatedAt": "2019-08-08T23:21:30.000Z"
// },
// {
//   "id": 3,
//   "routeName": "bernieSanders",
//   "candidateName": "Bernie Sanders",
//   "scores": "1,2,5,5,1,1,1,1,1,1,1,2,1,2,1,1,1,5,2,4,1,1,1,1,1",
//   "createdAt": "2019-08-08T23:27:47.000Z",
//   "updatedAt": "2019-08-08T23:27:47.000Z"
// },
// {
//   "id": 4,
//   "routeName": "betoOrourke",
//   "candidateName": "Beto O'rourke",
//   "scores": "1,1,1,2,2,1,3,1,3,5,2,2,3,1,1,1,3,5,2,2,1,3,5,2,1",
//   "createdAt": "2019-08-08T23:29:00.000Z",
//   "updatedAt": "2019-08-08T23:29:00.000Z"
// }];

module.exports = function (app) {
  // Get all examples
  app.get("/api/voters", function (req, res) {
    db.Voter.findAll({

    }).then(function (voters) {
      res.json(voters);
    });
  });

  // Create a new example
  app.post("/api/voters", function(req, res) {
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
      andrewYang: `${scoresArr[1]}`,
      bernieSanders: `${scoresArr[2]}`,
      betoOrourke: `${scoresArr[3]}`,
      coryBooker: `${scoresArr[4]}`,
      donaldTrump: `${scoresArr[5]}`,
      elizabethWarren: `${scoresArr[6]}`,
      jayInslee: `${scoresArr[7]}`,
      joeBiden: `${scoresArr[8]}`,
      johnDelaney: `${scoresArr[9]}`, 
      johnHickenloop: `${scoresArr[10]}`,
      julianCastro: `${scoresArr[11]}`,
      kamalaHarris: `${scoresArr[12]}`,
      kristenGillibrand: `${scoresArr[13]}`,
      marianneWilliamson: `${scoresArr[14]}`,
      peteButtigieg: `${scoresArr[15]}`,
      tulsiGabbard: `${scoresArr[16]}`
    };
    console.log(`new Voter created WOO: ${newVoter}`)
    
    db.Voter.create(newVoter).then(function(newVoter) {
      res.send(newVoter);
    });
    
  });
    // db.Voter.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);
    // });
    // db.Candidate.findAll().then(function (candidates){
    //   console.log(candidates);
    // })
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // --note that PUT route was added by EGF from a todos list example
  // PUT route for updating examples. We can get the updated example from req.body 
  app.put("/api/examples", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Example.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (dbExample) {
        res.json(dbExample);
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
  app.post("/api/candidate/:id", function(req, res) {
    db.Candidate.create({where: {id: req.params.id}}).then()
  })

};