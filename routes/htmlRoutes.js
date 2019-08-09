var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    
      res.render("index", {
     
      });
    
  });

<<<<<<< HEAD
  app.get("/survey", function(req, res) {
    res.render("survey");
  
});
=======
  // Load survey page 
  app.get("/survey", function(req, res) {
    res.render("survey", {

    })
  });

>>>>>>> 3b0bdc4225cdc199a20ff5d11de8db896fb9f9a7
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
