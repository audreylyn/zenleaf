
const products = [
    {
        id: 1,
        category: "plants",
        name: "Dazzling Aglaonema",
        price: 2500,
        image: "../assets/images/shop/plants/Dazzling Aglaonema.png",
        description: "Transform your space with this stunning Aglaonema. Perfect for creating a tropical atmosphere, this plant adds a touch of luxury and natural beauty to any room. Its vibrant, variegated leaves create an elegant display while purifying your air naturally.",
        care: {
            water: "Water weekly, allowing soil to dry between waterings",
            light: "Thrives in bright, indirect sunlight",
            temperature: "Maintains best growth at room temperature"
        }
    },
    {
        id: 2,
        category: "plants",
        name: "Strelitzia Nicolai",
        price: 2300,
        image: "../assets/images/shop/plants/best_seller.png",
        description: "Our most sought-after indoor plant, cherished for its lush foliage and air-purifying qualities. This hardy specimen thrives in various conditions, making it perfect for both beginners and experienced plant parents.",
        care: {
            water: "Water every 7-10 days",
            light: "Adaptable to various light conditions",
            temperature: "Ideal in 65-80°F (18-27°C)"
        }
    },
    {
        id: 3,
        category: "plants",
        name: "Lavender Bliss",
        price: 4000,
        image: "../assets/images/shop/plants/Lavender Bliss.png",
        description: "Experience the soothing presence of our premium lavender plant. Known for its calming fragrance and beautiful purple blooms, this plant brings the essence of Provence to your home. Perfect for gardens, patios, or sunny windowsills.",
        care: {
            water: "Keep soil lightly moist, water when top inch is dry",
            light: "Requires full sunlight, 6-8 hours daily",
            temperature: "Prefers cool to moderate temperatures, 60-70°F"
        }
    },
    {
        id: 4,
        category: "plants",
        name: "Fittonia Plant",
        price: 2200,
        image: "../assets/images/shop/plants/offer4.png",
        description: "A rare find at an exceptional value, this stunning plant features unique patterns and rich colors. Its compact size makes it perfect for desks and small spaces while still making a bold statement.",
        care: {
            water: "Moderate watering, once every 5-7 days",
            light: "Medium to bright indirect light",
            temperature: "Comfortable in normal room temperatures"
        }
    },
    {
        id: 5,
        category: "plants",
        name: "Sage Serenity",
        price: 2400,
        image: "../assets/images/shop/plants/Sage Serenity.png",
        description: "This elegant sage plant combines beauty with utility. Its silver-green leaves add a sophisticated touch to any space while providing aromatic herbs for your culinary adventures.",
        care: {
            water: "Allow soil to dry between waterings",
            light: "Full sun to partial shade",
            temperature: "Tolerates wide temperature range"
        }
    },
    {
        id: 6,
        category: "supplements",
        name: "Ashwagandha",
        price: 1800,
        image: "../assets/images/shop/supplements/sup1.png",
        description: "Premium organic Ashwagandha supplement, known for its stress-reducing and energy-boosting properties. Our carefully formulated capsules harness the full potential of this ancient adaptogenic herb.",
        care: {
            water: "1-2 capsules daily with meals",
            light: "Supports stress management and energy levels",
            temperature: "Store in a cool, dry place"
        }
    },
    {
        id: 7,
        category: "supplements",
        name: "Stevia Rebaudiana",
        price: 2000,
        image: "../assets/images/shop/supplements/sup2.png",
        description: "Enhanced formula combining pure Stevia Rebaudiana with complementary herbs for maximum effectiveness. This advanced blend supports both mental clarity and physical vitality.",
        care: {
            water: "1 capsule twice daily",
            light: "Enhanced stress resistance and mental focus",
            temperature: "Keep sealed in original container"
        }
    },
    {
        id: 8,
        category: "supplements",
        name: "Gotu Kola",
        price: 2200,
        image: "../assets/images/shop/supplements/sup4.png",
        description: "Our premium grade Gotu Kola supplement, featuring high-potency extract in easy-to-absorb form. Each batch is tested for purity and potency to ensure superior quality.",
        care: {
            water: "1 capsule daily with breakfast",
            light: "Optimal hormonal balance and stress support",
            temperature: "Store below 25°C"
        }
    },
    {
        id: 9,
        category: "tools",
        name: "Garden Wheelbarrow",
        price: 3500,
        image: "../assets/images/shop/tools/barrow.png",
        description: "Heavy-duty wheelbarrow designed for serious gardeners. Features a rust-resistant steel frame and large pneumatic tire for easy maneuverability across any terrain.",
        care: {
            water: "6 cubic feet",
            light: "Powder-coated steel frame with poly tray",
            temperature: "25 lbs empty"
        }
    },
    {
        id: 10,
        category: "tools",
        name: "Professional Garden Tools Set",
        price: 3000,
        image: "../assets/images/shop/tools/gt1.png",
        description: "Complete set of essential gardening tools crafted from high-grade stainless steel. Ergonomic handles provide comfort during extended use.",
        care: {
            water: "5-piece set",
            light: "Trowel, fork, pruner, weeder, and cultivator",
            temperature: "Stainless steel with comfort grip handles"
        }
    },
    {
        id: 11,
        category: "tools",
        name: "Premium Garden Tool Kit",
        price: 4500,
        image: "../assets/images/shop/tools/trowel.png",
        description: "Deluxe gardening kit featuring premium tools in a convenient carrying case. Perfect for both beginners and experienced gardeners.",
        care: {
            water: "8-piece set",
            light: "Full range of essential gardening tools",
            temperature: "Carbon steel with TPR grip handles"
        }
    },
    {
        id: 12,
        category: "tools",
        name: "Professional Trowel",
        price: 1500,
        image: "../assets/images/shop/tools/gt2.png",
        description: "Professional-grade garden trowel with graduated markings for precise planting depth. The rust-resistant blade and comfortable handle make it perfect for daily use.",
        care: {
            water: "12 inches total",
            light: "Stainless steel blade with ash wood handle",
            temperature: "Depth markers and hanging hole"
        }
    }
];



// Initialize wishlist from localStorage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(product) {
    const exists = wishlist.some(item => item.id === product.id);
    
    if (!exists) {
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert("Added to wishlist!");
    } else {
        alert("This item is already in your wishlist!");
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

function createProductHTML(product) {
    const isWishlisted = isInWishlist(product.id);
    return `
        <article class="product-item" data-category="${product.category}" data-product-id="${product.id}">
            <div class="feat-item-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="feat-item-box">
                <div class="feat-item-name">
                    <h4>${product.name}</h4>
                </div>
                <div class="feat-item-price">
                    <h4>₱${product.price}</h4>
                </div>
                <div class="card-btns">
                    <button class="btn-icon" title="Add to Cart" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                            <path d="M12.5 17h-6.5v-14h-2"></path>
                            <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path>
                            <path d="M16 19h6"></path>
                            <path d="M19 16v6"></path>
                        </svg>
                    </button>
                    <button class="btn-icon" title="Quick View" popovertarget="view-popover" onclick="showProductDetails(${product.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                        </svg>
                    </button>
                    <button class="btn-icon wishlist-btn ${isWishlisted ? 'active' : ''}" 
                            title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                            onclick="handleWishlist(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" 
                             stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    `;
}


function handleWishlist(product) {
    if (isInWishlist(product.id)) {
        removeFromWishlist(product.id);
        alert("Removed from wishlist!");
    } else {
        addToWishlist(product);
    }
    filterProducts(document.querySelector('.filter-btn.active').dataset.category);
}

function filterProducts(category) {
    const container = document.getElementById('productContainer');
    
    if (!container) {
        console.error('Error: The container with id "productContainer" does not exist.');
        return;
    }

    const filteredProducts = category === 'all'
        ? products
        : products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        container.innerHTML = `<p>No products found in this category.</p>`;
    } else {
        container.innerHTML = filteredProducts.map(createProductHTML).join('');
    }
}


document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.currentTarget.classList.add('active');
        const category = e.currentTarget.dataset.category;
        filterProducts(category);
    });
});


// Initial load
filterProducts('all');


// Function to show product details in popover
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Reset modal content to ensure it's cleared before showing new product
    const modalImg = document.querySelector('#view-popover .modal-img img');
    const title = document.querySelector('#view-popover .item-title');
    const price = document.querySelector('#view-popover .item-price');
    const description = document.querySelector('#view-popover .item-desc');
    const waterInfo = document.querySelector('#view-popover .water-info');
    const lightInfo = document.querySelector('#view-popover .light-info');
    const tempInfo = document.querySelector('#view-popover .temp-info');

    // Clear previous content
    modalImg.src = "";
    modalImg.alt = "";
    title.textContent = "";
    price.textContent = "";
    description.textContent = "";
    waterInfo.textContent = "";
    lightInfo.textContent = "";
    tempInfo.textContent = "";

    // Update modal with new product data
    modalImg.src = product.image;
    modalImg.alt = product.name;
    title.textContent = product.name;
    price.textContent = `₱${product.price}`;
    description.textContent = product.description;

    // Check if the product has care information and update accordingly
    if (product.care) {
        waterInfo.textContent = product.care.water;
        lightInfo.textContent = product.care.light;
        tempInfo.textContent = product.care.temperature;
    }

    // Show modal and background
    document.querySelector('.modal-bg').style.display = 'block';
    document.getElementById('view-popover').style.display = 'block';
}

// Function to close the modal
function closePopover() {
    document.getElementById('view-popover').style.display = 'none';
    document.querySelector('.modal-bg').style.display = 'none';
}

// Event listener for the background click to close modal
document.querySelector('.modal-bg').addEventListener('click', closePopover);

// Event listener for the close button click to close modal
document.querySelector('.close-btn').addEventListener('click', closePopover);
