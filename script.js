// JavaScript placeholder file for future interactivity
console.log("Website loaded successfully.");


// voices carousel

// JavaScript for Carousel with Auto-Switch functionality

let currentIndex = 0;
const cards = document.querySelectorAll('.community-card');
const dots = document.querySelectorAll('.dot');

// Function to update the active card and dot
function updateCarousel() {
  // Hide all cards
  cards.forEach(card => card.classList.remove('active'));

  // Remove active class from all dots
  dots.forEach(dot => dot.classList.remove('active'));

  // Show the current card and add active class to the corresponding dot
  cards[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

// Function to go to the next card
function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;  // Loop back to the first card
  updateCarousel();
}

// Function to go to the previous card
function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;  // Loop back to the last card
  updateCarousel();
}

// Event listeners for dots (to manually switch cards)
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Initialize the carousel (set the first card as active)
updateCarousel();

// Auto switch cards every 3 seconds
setInterval(nextCard, 3000);  // 3000ms = 3 seconds



