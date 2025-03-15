
// latest product.....................
new Swiper('.card-wrapper', {
  
  loop: true,
  spaceBetween:10,

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive brealpoint
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
     1024: {
      slidesPerView: 4
    },
  },
});
// latest product
// testmonial part start===============================================================================

new Swiper('.testmonial-card-wrapper', {
  
  loop: true,
  spaceBetween:30,

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive brealpoint
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
     1024: {
      slidesPerView: 2
    },
  },
});
// testmonial part end===============================================================================


//aroow up ===========================================================================

  // Select the button
        const scrollTopBtn = document.getElementById("scrollTopBtn");

        // Show the button when scrolling down
        window.onscroll = () => {
            if (document.documentElement.scrollTop > 200) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };

        // Scroll to the top smoothly when button is clicked
        scrollTopBtn.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };



  // home page closed============================================================================================================================

  
  // ===========================================
  const thumbnails = document.querySelectorAll('.thumbnail-images img');
const mainImage = document.querySelector('.main-image img');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
    });
});

// "--------------------
const askExpertButton = document.querySelector('.ask-expert');
askExpertButton.addEventListener('click', () => {
    alert('Please discribe your question in contact form');
});

// ---------------------product page----------------------------------------------start
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const discountedPriceElement = document.getElementById("discountedPrice");
  const quantityInput = document.getElementById("quantityInput");
  const decreaseButton = document.getElementById("decrease");
  const increaseButton = document.getElementById("increase");
  const subtotalDisplay = document.getElementById("subtotal");

  const getPriceFromElement = () => {
      // Get the discounted price as a float value
      const priceText = discountedPriceElement.textContent.replace('$', '').replace(',', '');
      return parseFloat(priceText) || 0;
  };

  const updateSubtotal = () => {
      const pricePerUnit = getPriceFromElement(); // Get price dynamically
      const quantity = parseInt(quantityInput.value) || 0; // Get quantity
      const subtotal = quantity * pricePerUnit;
      subtotalDisplay.textContent = subtotal.toFixed(2); // Format to two decimal places
  };

  decreaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantityInput.value) || 0;
      if (quantity > 0) quantity--;
      quantityInput.value = quantity;
      updateSubtotal();
  });

  increaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantityInput.value) || 0;
      quantity++;
      quantityInput.value = quantity;
      updateSubtotal();
  });

  quantityInput.addEventListener("input", updateSubtotal);

  // Initialize subtotal on load
  updateSubtotal();
});

  // ---------button-------
function showTab(tabId) {
      // Remove 'active' class from all buttons
      document.querySelectorAll('.tab-buttons button').forEach(button => {
        button.classList.remove('active');
      });

      // Hide all tab content
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
      });

      // Show selected tab and make its button active
      document.getElementById(tabId).classList.remove('hidden');
      document.getElementById(tabId + '-tab').classList.add('active');
    }


    // product page 1--------------------------
       new Swiper('.product-scroll-card-wrapper', {
  
  loop: true,
  spaceBetween:30,

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive brealpoint
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
     1024: {
      slidesPerView: 5
    },
  },
});
    // product page 1--------------------------
// all product page-------------------
function showSingleTab(tabId) {
  // Remove 'active' class from all buttons
  document.querySelectorAll('.all-product-tab-buttons button').forEach(button => {
    button.classList.remove('all-product-active');
  });

  // Hide all tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.add('hidden');
  });

  // Show the clicked tab and activate its button
  document.getElementById(tabId).classList.remove('hidden');
  document.getElementById(tabId + '-tab').classList.add('all-product-active');
}

// all product page-------------------
//  pop up form star......
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');

// Open the modal
openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close the modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

  //  pop up form end......

