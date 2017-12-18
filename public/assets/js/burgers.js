
//make sure DOM has loaded
$(function() {
  $(".devour-it").on("click", function(event) {
    var id = $(this).data("id");

    var devouredState = {
      devoured: true
    };

    //send the PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("devoured burger" + id);
        //reload the page to refresh list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    //prevent default submit behavior
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bgr").val().trim()
    };

    //send the POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        //reload the page to refresh list
        location.reload();
      }
    );
  });

});


