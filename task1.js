var FullCon = document.getElementById("FullCon");
var Full = document.getElementById("Full");
var currentInd = 0;
var images = document.querySelectorAll('.Gal img');

function openFull(index) {
    currentInd = index;
    FullCon.style.display = "flex";
    Full.src = images[currentInd].src;
}

function closeFull() {
    FullCon.style.display = "none";
}

function nextImg() {
    currentInd = (currentInd + 1) % images.length;
    Full.src = images[currentInd].src;
}

function prevImg() {
    currentInd = (currentInd - 1 + images.length) % images.length;
    Full.src = images[currentInd].src;
}

document.getElementById('searchB').addEventListener('click', () => {
    const query = document.getElementById('search').value.toLowerCase();
    let found = false;
    images.forEach((image, index) => {
        const keywords = image.getAttribute('data-keywords').toLowerCase();
        if (keywords === query) {
            found = true;
            openFull(index);
        }
    });

    if (!found) {
        alert("No matching image found");
    }
});
