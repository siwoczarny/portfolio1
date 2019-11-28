// Logo size with scroll

window.onload = function () {

    window.onscroll = function () {

        var navbar = document.getElementById("logo");
        var yScrollAxis = window.pageYOffset;

        if (yScrollAxis > 50)
            navbar.style.maxHeight = "40px";
        else
            navbar.style.maxHeight = "56px";


    };
};