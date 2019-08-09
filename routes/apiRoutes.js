var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/voters", function (req, res) {
    db.Voter.findAll({

    }).then(function (voters) {
      res.json(voters);
    });
  });

  // Create a new example
  app.post("/api/voters", function (req, res) {
    db.Voter.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
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




//CODE BELOW FROM FRIENDFINDER -- NEEDS UPDATING TO INCORPORATE 5 CANDIDATES
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// var path = require("path");
// var voters = require("../data/voters");
// var candidates = require("../data/candidates");


// module.exports = function(app) {


//     app.get("/api/candidates", function(req, res){
//         return res.json(candidates);
//     });

//     app.get("/api/candidates/:routeName", function(req, res) {
//         var chosen = req.params.routeName;

//         for (var i = 0; i < candidates.length; i++) {
//             if (chosen == candidates[i].routeName) {
//                 return res.json(candidates[i]);
//             }
//         }

//         return res.json(false);
//     });

//     app.post("/api/voters", function (req, res) {
//         var userScore = req.body.scores;
//         var scoresArr = [20, 30, 40, 50, 60, 70];
//         var bestMatch1 = 0;
//         var bestMatch2 = 0;
//         var bestMatch3 = 0;
//         var bestMatch4 = 0;
//         var bestMatch5 = 0;


//     for (var i = 0; i < candidates.length; i++) {
//         var scoreDiff = 0;
//         for (var j = 0; j < userScore.length; j++) {
//             scoreDiff += (Math.abs(parseInt(candidates[i].scores[j]) - parseInt(userScore[j])))
//         }
//         scoresArr.push(scoreDiff);
//     } 
    // app.post("/api/voters", function (req, res) {
    //     var userScore = req.body.scores;
    //     var scoresArr = [];
    //     var bestMatch = 0; // will need multiple best matches to rank top candidate matches

    // for (var i = 0; i < candidates.length; i++) {
    //     var scoreDiff = 0;
    //     for (var j = 0; j < userScore.length; j++) {
    //         scoreDiff += (Math.abs(parseInt(candidates[i].scores[j]) - parseInt(userScore[j])))
    //     }
    //     scoresArr.push(scoreDiff);
    // }});

//     for (var i = 0; i < scoresArr.length; i++) {
//         if (scoresArr[i] <= scoresArr[bestMatch]) {
//             bestMatch1 = i;
//             console.log("bestmatch1: " + bestMatch1)
//         } else if ((scoresArr[i] <= scoresArr[bestMatch2]) && (bestMatch2 > bestMatch1)) {
//             bestMatch2 = i; 
//             console.log("bestmatch2: " + bestMatch2)
//         } 
//     }


//     var bestCandidate = candidates[bestMatch];
//     res.json(bestCandidate);
//         voters.push(req.body);
//         res.status(200).send(userScore);
//     });


// };