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
    name: $("#exampleFormControlInput1").val().trim(),
    question1: $("#exampleFormControlSelect1").val(),
    question2: $("#exampleFormControlSelect2").val(),
    question3: $("#exampleFormControlSelect3").val(),
    question4: $("#exampleFormControlSelect4").val(),
    question5: $("#exampleFormControlSelect5").val(),
    question6: $("#exampleFormControlSelect6").val(),
    question7: $("#exampleFormControlSelect7").val(),
    question8: $("#exampleFormControlSelect8").val(),
    question9: $("#exampleFormControlSelect9").val(),
    question10: $("#exampleFormControlSelect10").val(),
    question11: $("#exampleFormControlSelect11").val(),
    question12: $("#exampleFormControlSelect12").val(),
    question13: $("#exampleFormControlSelect13").val(),
    question14: $("#exampleFormControlSelect14").val(),
    question15: $("#exampleFormControlSelect15").val(),
    question16: $("#exampleFormControlSelect16").val(),
    question17: $("#exampleFormControlSelect17").val(),
    question18: $("#exampleFormControlSelect18").val(),
    question19: $("#exampleFormControlSelect19").val(),
    question20: $("#exampleFormControlSelect20").val(),
    question21: $("#exampleFormControlSelect21").val(),
    question22: $("#exampleFormControlSelect22").val(),
    question23: $("#exampleFormControlSelect23").val(),
    question24: $("#exampleFormControlSelect24").val(),
    question25: $("#exampleFormControlSelect25").val(),

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
$("#voter-survey").on("submit", handleFormSubmit());
$exampleList.on("click", ".delete", handleDeleteBtnClick);
