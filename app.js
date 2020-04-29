document.addEventListener("DOMContentLoaded", function () {
    // ==================================================
    // References to elements or Global variables
    // ==================================================
    const fccButton = document.getElementById('fcc_test_suite_wrapper');
    const fccButtonToggle = document.getElementById("scriptTest");
    const navBar = document.getElementById("nav-bar");
    // Flag for toggle
    var showing = false;

    // ==================================================
    // Main Executions
    // ==================================================
    toggleTest();
    colorNav();

    // ==================================================
    // Helper Functions
    // ==================================================
    // This function handles the toggle for the test script from freeCodeCamp
    function toggleTest() {
        fccButtonToggle.addEventListener("click", function () {
            if (showing) {
                fccButton.style.display = "none";
                showing = false;
            } else {
                fccButton.style.display = "block";
                showing = true;
            }
        });
    };

    // This function will add a class name to the navbar for display purposes
    function colorNav() {
        document.addEventListener("scroll", function () {
            let distanceScrolled = window.pageYOffset;
            if (distanceScrolled < 1) {
                navBar.classList.remove("colorNavDark");
            } else {
                navBar.classList.add("colorNavDark");
            }
        });
    };
});