document.querySelector('#searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = document.querySelector('#searchInput').value;
    const outputElement = document.querySelector('#output');

    if (inputText.trim() === "") {
        outputElement.textContent = "Tidak mencari data...";
    } else {
        outputElement.textContent = "Mencari data " + inputText + "...";
    }
});