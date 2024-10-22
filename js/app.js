let cart = [];
let totalPrice = 0;


// Function to show the slideshow
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Thay đổi slide mỗi 3 giây
}

// Change slide on button click
function changeSlide(n) {
    showSlidesManual(n);
}

// Function to show slide manually
function showSlidesManual(n) {
    const slides = document.getElementsByClassName("slide");
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}

// Add to cart function
function addToCart(productName, price) {
    cart.push(productName);
    totalPrice += price;
    displayCart();
}

// Display cart items
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = `Tổng tiền: ${totalPrice} VNĐ`;
}

// Validate contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Vui lòng điền đầy đủ thông tin!");
        return false;
    }

    document.getElementById('form-message').textContent = "Cảm ơn bạn đã gửi thông tin!";
    return false; // Prevent form submission for demonstration
}

// Start slideshow
showSlides();
let slideIndex = 1;
showSlides(slideIndex);

// Tiến/lùi các slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Chọn slide hiện tại
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Hiển thị các slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Quay về đầu nếu n > số slide
    if (n > slides.length) {slideIndex = 1}
    // Quay về cuối nếu n < 1
    if (n < 1) {slideIndex = slides.length}
    
    // Ẩn tất cả các slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // Ẩn tất cả các dot
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Hiển thị slide hiện tại và đánh dấu dot hiện tại
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Tự động chuyển slide sau mỗi 3 giây
setInterval(() => {
    plusSlides(1);
}, 3000);
