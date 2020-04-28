document.addEventListener("DOMContentLoaded", function () {
    // ==================================================
    // References to elements or Global variables
    // ==================================================
    const fccButton = document.getElementById('fcc_test_suite_wrapper');
    const fccButtonToggle = document.getElementById("scriptTest");
    // Flag for toggle
    var showing = false;

    // ==================================================
    // Main Executions
    // ==================================================
    toggleTest();

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
    }
});