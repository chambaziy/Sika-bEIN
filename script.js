const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeBtn.innerHTML = "☀️ DEACTIVATE DARK MODE";

    } else {

        darkModeBtn.innerHTML = "🌙 ACTIVATE DARK MODE";
    }

});


function openChannel(channel) {

    alert("BEIN SPORTS " + channel + " selected");

}
