
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


      // AJAX post the data to the voters API.
      $.post("/api/voters", userData, function(userData) {
      

        // Grab the result from the AJAX post so that the best candidates match's name and photo are displayed.
        //WE'LL WANT TO UPDATE THIS TO PULL THE TOP 5 CANDIDATES
        // $("#match-name").text(data.name);
        // $("#match-img").attr("src", data.photo);

        // // Show the modal with the best match
        // $("#results-modal").modal("toggle");
        console.log(userData.id);
        window.location= `/results/${userData.id}`

      });
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });