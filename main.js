
let isLightGrey = false;

function toggleBackground() {
    if (!isLightGrey) {
        document.body.style.backgroundColor = "#b4b4b4";
    } else {
        document.body.style.backgroundColor = "";
    }
    isLightGrey = !isLightGrey;
}
