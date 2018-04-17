// Get the modal
var modal_1 = document.getElementById('Loc1_Modal');

// Get the button that opens the modal
var btn_1 = document.getElementById("btn_loc1");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

/
// When the user clicks the button, open the modal 
btn_1.onclick = function() {
    modal_1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event_1) {
    if (event_1.target == modal_1) {
        modal_1.style.display = "none";
    }
}


// Get the modal
var modal_2 = document.getElementById('Loc2_Modal');

// Get the button that opens the modal
var btn_2 = document.getElementById("btn_loc2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks the button, open the modal 
btn_2.onclick = function() {
    modal_2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event_2) {
    if (event_2.target == modal_2) {
        modal_2.style.display = "none";
    }
}



// Get the modal
var modal_3 = document.getElementById('Loc3_Modal');

// Get the button that opens the modal
var btn_3 = document.getElementById("btn_loc3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks the button, open the modal 
btn_3.onclick = function() {
    modal_3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event_3) {
    if (event_3.target == modal_3) {
        modal_3.style.display = "none";
    }
}




// Get the modal
var modal_4 = document.getElementById('Loc4_Modal');

// Get the button that opens the modal
var btn_4 = document.getElementById("btn_loc4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks the button, open the modal 
btn_4.onclick = function() {
    modal_4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event_4) {
    if (event_4.target == modal_4) {
        modal_4.style.display = "none";
    }
}
