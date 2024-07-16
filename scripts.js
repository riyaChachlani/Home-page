$(document).ready(function () {
  $("#contactUsButton").click(function () {
    $("#contactFormModal").modal("show");
  });

  $("#contactForm").submit(function (event) {
    event.preventDefault();

    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
    };

    $.ajax({
      url: "https://getform.io/f/bkkgyjkb",
      method: "POST",
      data: formData,
      success: function (response) {
        alert("Form submitted successfully!");
        $("#contactFormModal").modal("hide");
      },
      error: function (error) {
        alert("There was an error submitting the form.");
      },
    });
  });
  $(".list-group-item").on("click", function () {
    var newImage = $(this).data("image");
    $("#projectImage").fadeOut(300, function () {
      $(this).attr("src", newImage).fadeIn(300);
    });
  });
});
