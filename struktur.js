document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("searchInput");

    input.addEventListener("keyup", searchTable);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchTable();
        }
    });
});

function searchTable() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#siswaTable tbody tr");

    rows.forEach(row => {
        const nipd = row.cells[0].textContent.toLowerCase();
        const nama = row.cells[1].textContent.toLowerCase();

        row.style.display =
            nipd.includes(input) || nama.includes(input)
                ? ""
                : "none";
    });
}
