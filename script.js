// Booking form submission handling
const bookingForm = document.getElementById("booking-form");
const confirmation = document.getElementById("confirmation");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = bookingForm.name.value.trim();
  const date = bookingForm.date.value;
  const time = bookingForm.time.value;
  if (name && date && time) {
    confirmation.textContent = `Thank you, ${name}! Your reservation for ${date} at ${time} has been received. We will contact you shortly.`;
    bookingForm.reset();
  } else {
    confirmation.textContent = "";
  }
});

// --------- GALLERY LIGHTBOX MODAL ---------
const galleryImgs = Array.from(document.querySelectorAll('.gallery-grid img'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');
let currentImgIdx = 0;

function openLightbox(idx) {
  lightbox.classList.add('open');
  showLightboxImg(idx);
}

function closeLightbox() {
  lightbox.classList.remove('open');
}

function showLightboxImg(idx) {
  currentImgIdx = (idx + galleryImgs.length) % galleryImgs.length;
  lightboxImg.src = galleryImgs[currentImgIdx].src.replace('w=800','w=1200').replace('h=100','h=700'); // serve higher-res if possible
  lightboxImg.alt = galleryImgs[currentImgIdx].alt;
}

galleryImgs.forEach((img, idx) => {
  img.addEventListener('click', () => openLightbox(idx));
  img.addEventListener('keydown', e => {
    if(e.key=='Enter' || e.key==' ') openLightbox(idx);
  });
});

closeBtn.addEventListener('click', closeLightbox);

prevBtn.addEventListener('click', e => {
  showLightboxImg(currentImgIdx - 1);
  e.stopPropagation();
});
nextBtn.addEventListener('click', e => {
  showLightboxImg(currentImgIdx + 1);
  e.stopPropagation();
});

// Close on escape key or clicking background
lightbox.addEventListener('click', e => {
  if(e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if(!lightbox.classList.contains('open')) return;
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowRight') showLightboxImg(currentImgIdx + 1);
  if(e.key === 'ArrowLeft') showLightboxImg(currentImgIdx - 1);
});
