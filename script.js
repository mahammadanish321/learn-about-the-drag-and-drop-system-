const dropBox = document.getElementById("box");
const imgPreview = document.getElementById("img");

dropBox.addEventListener("dragover", (e) => {
    e.preventDefault();
});

dropBox.addEventListener("dragenter", () => {
    dropBox.classList.add("drag-active");
});

dropBox.addEventListener("dragleave", () => {
    dropBox.classList.remove("drag-active");
});

dropBox.addEventListener("drop", (e) => {
    e.preventDefault();
    dropBox.classList.remove("drag-active");

    const file = e.dataTransfer.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please drop an image file");
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        imgPreview.src = reader.result;
    };
    reader.readAsDataURL(file);
});
