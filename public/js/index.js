// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveVoter: function(voter) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/voters",
      data: JSON.stringify(voter)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
function handleFormSubmit(event) {
  console.log("handleformsubmit function ran");
  event.preventDefault();

  var newVoter = {
    firstName: $("#exampleFormControlInput1").val().trim(),
    scores: [$("#exampleFormControlSelect1").val(), $("#exampleFormControlSelect2").val(), $("#exampleFormControlSelect3").val(), $("#exampleFormControlSelect4").val(), $("#exampleFormControlSelect5").val(), $("#exampleFormControlSelect6").val(), $("#exampleFormControlSelect7").val(), $("#exampleFormControlSelect8").val(), $("#exampleFormControlSelect9").val(), $("#exampleFormControlSelect10").val(), $("#exampleFormControlSelect12").val(),  $("#exampleFormControlSelect13").val(), $("#exampleFormControlSelect14").val(), $("#exampleFormControlSelect15").val(), $("#exampleFormControlSelect16").val(), $("#exampleFormControlSelect17").val(), $("#exampleFormControlSelect18").val(), $("#exampleFormControlSelect19").val(), $("#exampleFormControlSelect20").val(), $("#exampleFormControlSelect21").val(), $("#exampleFormControlSelect22").val(), $("#exampleFormControlSelect23").val(), $("#exampleFormControlSelect24").val(), $("#exampleFormControlSelect25").val()]
  };

  // if (!(example.text && example.description)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }

  API.saveVoter(newVoter).then(function() {
    // refreshExamples();
    console.log("API saved voter ren");
    window.location = "/results";
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$("#voter-survey").on("submit", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
