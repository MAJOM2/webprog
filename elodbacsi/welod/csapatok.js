document.addEventListener("DOMContentLoaded", function() {
    // Modal elemek
    const modals = document.querySelectorAll(".modal");

    // Szekciók
    const topSection = document.querySelector(".top-section");
    const bottomSection = document.querySelector(".bottom-section");

    // Bezárás funkció
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "none";
    }

    // Modális ablak megjelenítése
    function showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "flex";  // A modal láthatóvá válik
    }

    // Event listener a top és bottom szekciókhoz
    topSection.addEventListener("click", function() {
        showModal("modal1");  // Az első szekció a modal1-et nyitja
    });

    bottomSection.addEventListener("click", function() {
        showModal("modal2");  // A második szekció a modal2-t nyitja
    });

    // Minden modal bezárása a háttérre kattintva
    window.addEventListener("click", function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none"; // Ha a háttérre kattintasz, bezárja a modált
            }
        });
    });

    // Bezárás gombok kezelése
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const modal = this.closest(".modal");
            modal.style.display = "none"; // Bezárja a modált
        });
    });
});
