// When you click put X or O, only if the box is clear
// Also don't override the box when clicked again
// If three boxes are filled in a row with either X or O alrert winner is X or O
// However if all boxes are filled and there is no winner alert game is a draw
// Click reset to clear all box's and start again

$(function() {

  var player = true;
// get array elements
  var $gridSquares = $("td");

// Add click event listener
  for (var i = 0; i < $gridSquares.eq.length; i++) {
    $gridSquares.eq(i).on("click", boxClicked);
  }

// Find out who's turn
  function boxClicked() {

    var clicked = $(this);
    if (player){
      placeX(clicked);
    } else {
      placeO(clicked);
    }
  }

// Add X
function placeX(clicked) {
  if (clicked.attr("class") != null {
    console.log("Shape has already been place!");
    return;

  } else {
  clicked.addClass("X");
  clicked.html("X");
  console.log(clicked.attr("class"));
  player = false;
  }
}

// Add O
function placeO(clicked) {
  if (clicked.attr("class") != null {
    console.log("Shape has already been place!");
    return;

  } else {
  clicked.addClass(")");
  clicked.html("O");
  console.log(clicked.attr("class"));
  player = true;
  }
}

});
