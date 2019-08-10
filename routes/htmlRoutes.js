var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    
      res.render("index", {
     
      });
    
  });

  // Load survey page 
  app.get("/survey", function(req, res) {
    res.render("survey", {

    })
  });

  // Load example page and pass in an example by id
  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
