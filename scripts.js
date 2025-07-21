document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-toggle');
  const searchInput = document.getElementById('search-input');

  searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('show');

    if (searchInput.classList.contains('show')) {
      searchInput.focus();
    }
  });
});
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
 function openModal(title, image, description, price) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('product-modal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
  }

  // Close when clicking outside the modal content
  window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
