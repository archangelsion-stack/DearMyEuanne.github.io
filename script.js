// ===============================
// Interactive Letter Script
// ===============================

const envelope = document.getElementById("envelope");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

let opened = false;

// Open Envelope
envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    // Open the envelope flap
    envelope.classList.add("open");

    // Wait for the flap animation
    setTimeout(() => {

        // Hide envelope page
        page1.classList.add("hidden");

        // Show letter page
        page2.classList.remove("hidden");

        // Scroll letter to the top every time it opens
        const paper = document.querySelector(".paper");
        if (paper) {
            paper.scrollTop = 0;
        }

    }, 1000);

});

// Back Button
function goBack() {

    // Hide letter
    page2.classList.add("hidden");

    setTimeout(() => {

        // Show envelope page
        page1.classList.remove("hidden");

        // Close envelope
        envelope.classList.remove("open");

        opened = false;

    }, 500);

}

// Optional: Press ESC to go back
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && opened) {
        goBack();
    }

});
