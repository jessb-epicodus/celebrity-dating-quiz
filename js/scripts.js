$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    $("#austin").hide();
    $("#minion").hide();

    if ((gender === "female" || "non-binary" || "male") && age >= 30) {
    $("#austin").show();
    } else if ((gender === "female" || "non-binary" || "male") && age < 30) {
    $("#minion").show();
    } else {
    $(".invalid-feedback").show();
    }
    event.preventDefault();
  });
});