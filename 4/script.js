const imageSelect = document.getElementById('imageSelect');
const opacitySelect = document.getElementById('opacitySelect');
const displayImage = document.getElementById('displayImage');

imageSelect.addEventListener('change', updateImage);
opacitySelect.addEventListener('change', updateOpacity);

function updateImage() {
    const selectedImage = imageSelect.value;
    displayImage.src = selectedImage;
}

function updateOpacity() {
    const selectedOpacity = opacitySelect.value;
    displayImage.style.opacity = selectedOpacity;
}
