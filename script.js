// Booking form submission (optional if you add form later)
const bookingForm = document.getElementById("booking-form");
const confirmation = document.getElementById("confirmation");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = bookingForm.name.value.trim();
    const date = bookingForm.date.value;
    const time = bookingForm.time.value;
    if (name && date && time) {
      confirmation.textContent = `Thank you, ${name}! Your reservation for ${date} at ${time} has been received.`;
      bookingForm.reset();
    } else {
      confirmation.textContent = "";
    }
  });
}
