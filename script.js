var slider = document.getElementById("salaryRange");
var output = document.getElementById("salary");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}

//on scroll call the function
window.onscroll = function () {
    scrollFunction()
};

//This function shows the button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        document.getElementById("topBtn").style.display = "block";
    }
    else {
        document.getElementById("topBtn").style.display = "none";
    }
}

//This takes to the top of the page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}