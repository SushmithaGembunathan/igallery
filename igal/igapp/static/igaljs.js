// Get all gallery images and the modal elements
const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close-btn');

// Add click event listener for each gallery image
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    modalImg.src = image.src;
    modalImg.alt = image.alt;
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', closeModal);

// Close the modal when the Escape key is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.style.display === 'flex') {
    closeModal();
  }
});

// Close modal function
function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
  modalImg.alt = '';
}
