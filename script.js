let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
    
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ₹${item.price.toLocaleString('en-IN')}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('total-price').innerText = `₹${totalPrice.toLocaleString('en-IN')}`;
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = (cartPopup.style.display === 'block') ? 'none' : 'block';
}

function checkout() {
    alert(`Thank you for your purchase of ₹${totalPrice.toLocaleString('en-IN')}!`);
    cart = [];
    updateCart();
    toggleCart();
}

// Slider Functions
let currentIndex = 0;
const slides = document.querySelectorAll("#slider img");
const dotsContainer = document.getElementById('slider-dots');

// Create dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => moveToSlide(index));
    dotsContainer.appendChild(dot);
});
updateDots();

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlider();
}

function moveToSlide(index) {
    currentIndex = index;
    updateSlider();
}

function updateSlider() {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('#slider-dots span');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Auto-slide every 4 seconds
setInterval(() => moveSlide(1), 4000);
