const gallery = document.querySelectorAll(".image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

let newIndex = 0; // Initialize newIndex variable
let clickedImgIndex; // Create a variable for clicked image index

function showPreview(index) {
  currentImg.textContent = index + 1;
  let imageURL = gallery[index].querySelector("img").src;
  previewImg.src = imageURL;

  // Hide or show previous and next buttons
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (index === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (index === gallery.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

// Add click event listener to each gallery image
gallery.forEach((image, index) => {
  image.addEventListener("click", () => {
    clickedImgIndex = index;
    newIndex = index;
    showPreview(index);
    previewBox.classList.add("show");
    shadow.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
  });
});

// Close button functionality
closeIcon.addEventListener("click", () => {
  previewBox.classList.remove("show");
  shadow.style.display = "none";
  document.querySelector("body").style.overflow = "scroll";
});

// Previous button functionality
document.querySelector(".prev").addEventListener("click", () => {
  if (newIndex > 0) {
    newIndex--;
    showPreview(newIndex);
  }
});

// Next button functionality
document.querySelector(".next").addEventListener("click", () => {
  if (newIndex < gallery.length - 1) {
    newIndex++;
    showPreview(newIndex);
  }
});

// Initial hide of previous and next buttons
document.querySelector(".prev").style.display = "none";
document.querySelector(".next").style.display = "none";

// Update totalImg text content
totalImg.textContent = gallery.length;
