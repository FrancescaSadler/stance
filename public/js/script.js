$("#surveySubmit").on("click", function(event) {
    event.preventDefault();

    var newVoter = {
        firstname: $("#name").val().trim(),
        scores: [
            $("#q1").val().trim(),
            
    ]
    }
})