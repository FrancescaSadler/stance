
  // // Chosen CSS 
  // //WE MAY NEED TO TWEAK THIS 
  // var config = {
  //   ".chosen-select": {},
  //   ".chosen-select-deselect": {
  //     allow_single_deselect: true
  //   },
  //   ".chosen-select-no-single": {
  //     disable_search_threshold: 10
  //   },
  //   ".chosen-select-no-results": {
  //     no_results_text: "Oops, nothing found!"
  //   },
  //   ".chosen-select-width": {
  //     width: "95%"
  //   }
  // };

  // for (var selector in config) {
  //   $(selector).chosen(config[selector]);
  // }

  // Capture the form inputs
  $("#submitButton").on("click", function(event) {
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

    // If all reFormControlSelectuired fields are filled
    if (validateForm()) {
      // Create an object for the user's data //
      var userData = {
        name: $("#name").val(),
        scores: [
          $("#FormControlSelect1").val(),
          $("#FormControlSelect2").val(),
          $("#FormControlSelect3").val(),
          $("#FormControlSelect4").val(),
          $("#FormControlSelect5").val(),
          $("#FormControlSelect6").val(),
          $("#FormControlSelect7").val(),
          $("#FormControlSelect8").val(),
          $("#FormControlSelect9").val(),
          $("#FormControlSelect10").val(),
          $("#FormControlSelect11").val(),
          $("#FormControlSelect12").val(),
          $("#FormControlSelect13").val(),
          $("#FormControlSelect14").val(),
          $("#FormControlSelect15").val(),
          $("#FormControlSelect16").val(),
          $("#FormControlSelect17").val(),
          $("#FormControlSelect18").val(),
          $("#FormControlSelect19").val(),
          $("#FormControlSelect20").val(),
          $("#FormControlSelect21").val(),
          $("#FormControlSelect22").val(),
          $("#FormControlSelect23").val(),
          $("#FormControlSelect24").val(),
          $("#FormControlSelect25").val()
        ]
      };

      console.log($("#FormControlSelect1").val())
      console.log($("#FormControlSelect2").val())
      console.log($("#FormControlSelect3").val())
      console.log($("#FormControlSelect4").val())
      console.log($("#FormControlSelect5").val())
      console.log($("#FormControlSelect6").val())
      console.log($("#FormControlSelect7").val())
      console.log($("#FormControlSelect8").val())
      console.log($("#FormControlSelect9").val())
      console.log($("#FormControlSelect10").val())
      console.log($("#FormControlSelect11").val())
      console.log($("#FormControlSelect12").val())
      console.log($("#FormControlSelect13").val())
      console.log($("#FormControlSelect14").val())
      console.log($("#FormControlSelect15").val())
      console.log($("#FormControlSelect16").val())
      console.log($("#FormControlSelect17").val())
      console.log($("#FormControlSelect18").val())
      console.log($("#FormControlSelect19").val())
      console.log($("#FormControlSelect20").val())
      console.log($("#FormControlSelect21").val())
      console.log($("#FormControlSelect22").val())
      console.log($("#FormControlSelect23").val())
      console.log($("#FormControlSelect24").val())
      console.log($("#FormControlSelect25").val())
      

      // AJAX post the data to the voters API.
      $.post("/api/voters", userData, function(userData) {
          console.log(userData);
          console.log(userData.scores[0]);
        // Grab the result from the AJAX post so that the best candidates match's name and photo are displayed.
        //WE'LL WANT TO UPDATE THIS TO PULL THE TOP 5 CANDIDATES
        // $("#match-name").text(data.name);
        // $("#match-img").attr("src", data.photo);

        // // Show the modal with the best match
        // $("#results-modal").modal("toggle");

      });
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });