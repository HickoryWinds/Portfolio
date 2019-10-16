    // changeColor alternates background image and text color for banner
    // uses cnt to simplify testing condition
    var cnt = 1;
    function changeColor() {
        // if cnt === 1 change initial css image
            if (cnt === 1) {
                $("#banner").text("Full Stack Web Developer");
                $("#banner").css("color", "gold");
                $("#banner").css("background-color", "red");
                cnt = 2;
            }
            else {
                // change back to original image
                $("#banner").text("Ron Johnson");
                $("#banner").css("color", "black");
                $("#banner").css("background-color", "yellow");
                cnt = 1;
            }
        }
    // start changeColor
    setInterval(changeColor, 3000);
    
