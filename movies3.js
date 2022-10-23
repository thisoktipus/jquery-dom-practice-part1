$(function () {
  $("#addBtn").on("click", function (evt) {
    evt.preventDefault();

    const title = $("#title").val();
    let newMovie = $("<li>").text(title);
    $("#titleList").append(newMovie);

    const rating = $("#rating").val();
    let newRating = $("<li>").text(rating);
    $("#ratingList").append(newRating);

    const removeLi = $("<li>");
    $("#btnList").append(removeLi);
    let removeButton = $("<button>").text("X");
    removeLi.append(removeButton);

    removeButton.on('click', function() {
        newMovie.remove();
        newRating.remove();
        removeButton.remove();
    });
  });
});
