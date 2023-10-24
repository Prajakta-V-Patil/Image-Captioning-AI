const imageInput = document.getElementById("image-input");
const generateCaptionButton = document.getElementById("generate-caption");
const selectedImage = document.getElementById("selected-image");
const captionElement = document.getElementById("caption");
const imageContainer = document.querySelector(".image-container");

const defaultCaptions = [
    "A beautiful scene captured in this image.",
    "This image tells a unique story.",
    "Nature's beauty at its finest.",
    "A snapshot of the world's wonders.",
    "Incredible and captivating.",
    "Embrace the beauty of the world.",
    "Find magic in the ordinary.",
    "Where words fail, art speaks.",
    "In a world of black and white, be the color.",
    "Sunsets and dreams.",
    "Capturing moments, creating memories.",
    "Every picture tells a story.",
    "Chasing sunsets and dreams.",
    "Life in full color.",
    "Art is where work meets love.",
    "Breathe in the beauty.",
    "Embrace the chaos of creativity.",
    "Life is a canvas; make it your masterpiece.",
    "In a world of pixels, be a masterpiece.",
    "Discover the extraordinary in the everyday."
];

imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (file) {
        const imageURL = URL.createObjectURL(file);
        selectedImage.src = imageURL;
        imageContainer.style.display = "block";
        generateCaptionButton.style.display = "block";
    }
});

generateCaptionButton.addEventListener("click", () => {
    const randomCaption = defaultCaptions[Math.floor(Math.random() * defaultCaptions.length)];
    captionElement.textContent = randomCaption;
});
