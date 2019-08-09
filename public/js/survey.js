
  // Chosen CSS 
  //WE MAY NEED TO TWEAK THIS 
  var config = {
    ".chosen-select": {},
    ".chosen-select-deselect": {
      allow_single_deselect: true
    },
    ".chosen-select-no-single": {
      disable_search_threshold: 10
    },
    ".chosen-select-no-results": {
      no_results_text: "Oops, nothing found!"
    },
    ".chosen-select-width": {
      width: "95%"
    }
  };

  for (var selector in config) {
    $(selector).chosen(config[selector]);
  }

  // Capture the form inputs
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Form validation 
    function validateForm() {
      var isValid = true;
      $(".form-control").each(function() {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      $(".chosen-select").each(function() {

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
      // Create an object for the user's data //
      var userData = {
        name: $("#name").val(),
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val(),
          $("#q11").val(),
          $("#q12").val(),
          $("#q13").val(),
          $("#q14").val(),
          $("#q15").val(),
          $("#q16").val(),
          $("#q17").val(),
          $("#q18").val(),
          $("#q19").val(),
          $("#q20").val(),
          $("#q21").val(),
          $("#q22").val(),
          $("#q23").val(),
          $("#q24").val(),
          $("#q25").val()
        ]
      };

      // AJAX post the data to the voters API.
      $.post("/api/voters", userData, function(data) {

        // Grab the result from the AJAX post so that the best candidates match's name and photo are displayed.
        //WE'LL WANT TO UPDATE THIS TO PULL THE TOP 5 CANDIDATES
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Show the modal with the best match
        $("#results-modal").modal("toggle");

      });
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });

  //playing around 

  function createCandidate() {

    var clearBtn = $("<button>").attr("id", "clear").addClass("btn btn-primary bellhop center-block").text("Clear")
    $("#resultsWrap").append(clearBtn);
  
      candidateFilter.forEach(function (result, i) {
          var candidateName = result.candidate.name;
          // var candidateImage = result.restaurant.thumb;
  
          var candidateWrap = $("<div>").addClass("card mb-3 center").attr("id", "candidateName-" + i).attr("data-index", i);
  
          var row = $("<div>").addClass("row no-gutters");
  
          // var col1 = $("<div>").addClass("col-md-4").attr("id", "candidtaeImg-" + i);
          // var img = $("<img>").attr("src", candidateImage).attr("alt", "Your candidate");
          // $(col1).append(img);
  
          var col2 = $("<div>").addClass("col-md-4 text-center")
          var content = $("<div>").addClass("card-body");
  
          var h2 = $("<h2>").addClass("card-title").attr("id", "candidateName-"+i).text(candidateName);
          var btn = $("<button>").attr("type", "button").addClass("btn btn-primary bellhop buttonMore").attr("data-index", i).attr("id", "ButtonMore-"+i).attr("data-price", pricePoint).text("Tell Me More")
  
          $(content).append(h2, btn)
          $(col2).append(content);
  
          $(row).append(col1, col2);
  
          $(candidateWrap).append(row)
  
  
          $("#resultsWrap").append(candidateWrap);
          $("#resultsWrap").slideDown('slow');
      });
  
  }