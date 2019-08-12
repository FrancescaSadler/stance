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
        {"name": "Amy Klobuchar", "score": `${parseFloat(dbVoter.dataValues.amyKlobuchar)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/02/RTX6M5OD-e1550586367346.jpg?quality=75&strip=all&w=700&h=1050&crop=1", "website": "https://amyklobuchar.com/","bigIdeas" : "New measures to make it easier for small and mid-sized US businesses to export goods worldwide."},
        {"name": "Andrew Yang", "score": `${parseFloat(dbVoter.dataValues.andrewYang)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/02/RTS1WZQK-e1549039967801.jpg?quality=75&strip=all&w=700&h=1052&crop=1", "website": "https://www.yang2020.com/","bigIdeas" : "A $1,000 monthly check sent to every American over 18, so they can pay their bills as robots take over jobs."},
        {"name": "Bernie Sanders", "score": `${parseFloat(dbVoter.dataValues.bernieSanders)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/01/AP_499693704177-e1549494367499.jpg?quality=75&strip=all&w=700&h=1048&crop=1", "website": "https://berniesanders.com/", "bigIdeas" : "Sanders would like to make public colleges tuition-free, increase Social Security benefits, and make corporate America more union-friendly."},
        {"name": "Beto O'Rourke", "score": `${parseFloat(dbVoter.dataValues.betoOrourke)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/02/RTS24NY8-e1549040387521.jpg?quality=75&strip=all&w=700&h=1048&crop=1", "website": "https://betoorourke.com/","bigIdeas" : "O'Rourke encourages stronger anti-trust regulations to break up monopolies and encouraging companies to invest profits in their employees and communities."},
        {"name": "Cory Booker", "score": `${parseFloat(dbVoter.dataValues.coryBooker)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/01/RTX12JL2-e1549063161710.jpg?quality=75&strip=all&w=700&h=1052&crop=1", "website": "https://corybooker.com/","bigIdeas" : "A “baby bond” program that would give every child a US Treasury bond at birth, with a larger amount for poorer kids. He would also propose guaranteeing a $15 minimum-wage job in 15 test areas."},
        {"name": "Donald Trump", "score": `${parseFloat(dbVoter.dataValues.donaldTrump)}`, "imgURL": "https://pixel.nymag.com/imgs/daily/intelligencer/2019/07/01/01-trump-flag.w700.h700.jpg", "website": "https://www.donaldjtrump.com/","bigIdeas" : ""},
        {"name": "Elizabeth Warren", "score": `${parseFloat(dbVoter.dataValues.elizabethWarren)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/01/RTS2B92P-e1548866733523.jpg?quality=75&strip=all&w=700&h=1048&crop=1", "website": "https://elizabethwarren.com/","bigIdeas" : "A “wealth tax” of 2% on net worth over $50 million and 3% over $1 billion designed to raise $2.75 trillion over a decade."},
        {"name": "Jay Inslee", "score": `${parseFloat(dbVoter.dataValues.jayInslee)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/02/RTR3JV0D-e1551453430324.jpg?quality=75&strip=all&w=700&h=1052&crop=1", "website": "https://www.jayinslee.com/","bigIdeas" : "He proposes removing subsidies and tax breaks for the fossil-fuel industry, and supports the Green New Deal."},
        {"name": "Joe Biden", "score": `${parseFloat(dbVoter.dataValues.joeBiden)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/02/RTSVP0W-e1549058089635.jpg?quality=75&strip=all&w=700&h=1048&crop=1", "website": "https://joebiden.com/","bigIdeas" : "His Biden Institute is pushing tech education and increased bargaining power for American workers as a solution to the left-behind working and middle class."},
        {"name": "John Delaney", "score": `${parseFloat(dbVoter.dataValues.johnDelaney)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/01/AP_18222623870289-e1548869182792.jpg?quality=75&strip=all&w=700&h=1052&crop=1", "website": "https://www.johndelaney.com/","bigIdeas" : "Build a public and private international coalition against China’s intellectual property theft, and compete against China in Asia with a TPP-style trade deal."},
        {"name": "John Hickenlooper", "score": `${parseFloat(dbVoter.dataValues.johnHickenlooper)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/03/AP_19045046324569-e1551714083792.jpg?quality=75&strip=all&w=700&h=1052&crop=1", "website": "https://www.hickenlooper.com/","bigIdeas" : "Cutting red tape to reduce the cost of doing business and increase compliance with regulations."},
        {"name": "Julian Castro", "score": `${parseFloat(dbVoter.dataValues.julianCastro)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/02/AP_19014658329223-e1549040150325.jpg?quality=75&strip=all&w=700&h=1048&crop=1", "website": "https://www.julianforthefuture.com/","bigIdeas" : "Though he hasn’t released many details of his platform, he’s been a strong advocate of free trade, which has benefitted his hometown. "},
        {"name": "Kamala Harris", "score": `${parseFloat(dbVoter.dataValues.kamalaHarris)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/02/Kamala-Harris-bio-portrait.jpg?quality=75&strip=all&w=700&h=1050&crop=1", "website": "https://kamalaharris.org/","bigIdeas" : "The LIFT Act, a working- and middle-class tax cut akin to the Earned Income Tax Credit that she says will provide up to $500 a month to families."},
        {"name": "Kirsten Gillibrand", "score": `${parseFloat(dbVoter.dataValues.kirstenGillibrand)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/01/RTS2ASYO-e1549063893462.jpg?quality=75&strip=all&w=700&h=1052&crop=1", "website": "https://kirstengillibrand.com/","bigIdeas" : "Gillibrand has been pushing the US to require that companies adopt a universal paid parental leave policy."},
        {"name": "Marianne Williamson", "score": `${parseFloat(dbVoter.dataValues.marianneWilliamson)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/01/AP_17311121918909-e1549064262713.jpg?quality=75&strip=all&w=700&h=1052&crop=1", "website": "https://www.marianne2020.com/","bigIdeas" : "Pay $10 billion in slavery reparations every year for 10 years to the African American community."},
        {"name": "Pete Buttigieg", "score": `${parseFloat(dbVoter.dataValues.peteButtigieg)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/01/RTS2C3TL-e1549065589332.jpg?quality=75&strip=all&w=700&h=1050&crop=1", "website": "https://peteforamerica.com/","bigIdeas" : "Increase public protections of jobs and benefits to help make the employment market more dynamic without the fear of personal debt tied to college loans and medical bills."},
        {"name": "Tulsi Gabbard", "score": `${parseFloat(dbVoter.dataValues.tulsiGabbard)}`, "imgURL": "https://cms.qz.com/wp-content/uploads/2019/01/AP_18311262198254-e1549058604962.jpg?quality=75&strip=all&w=700&h=1050&crop=1", "website": "https://www.tulsi2020.com","bigIdeas" : " Cut taxes on small businesses and farmers, raise them on corporations; lower military spending by ending regime-change wars and reducing the acquisition of nuclear weapons."}
      ];

    
      var sorted = _.orderBy(sortingObj, ["score"], ['desc']);
      var hbsObj = {voter: sorted};
      res.render("results", hbsObj);
    });
  });
};
