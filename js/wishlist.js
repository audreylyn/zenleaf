let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];function updateWishlistUI(){const wishlistGrid=document.getElementById('wishlistGrid');if(!wishlistGrid)return;const header=wishlistGrid.querySelector('.header-wishlist');wishlistGrid.innerHTML='';if(header){wishlistGrid.appendChild(header)}
if(wishlist.length===0){const emptyMessage=document.createElement('div');emptyMessage.className='empty-wishlist';emptyMessage.style.textAlign='center';emptyMessage.style.padding='2rem';emptyMessage.innerHTML=`
            <h3>Your wishlist is empty</h3>
            <p>Browse our products and add items to your wishlist!</p>
        `;wishlistGrid.appendChild(emptyMessage);return}
wishlist.forEach(item=>{if(!item||!item.id||!item.name||!item.price)return;const article=document.createElement('article');article.className='product-item';article.innerHTML=`
            <div class="product-info">
                <div>
                    <h3 class="product-name">${escapeHtml(item.name)}</h3>
                    <h2 class="product-price">₱${formatPrice(item.price)}</h2>
                </div>
                <button class="addToCart" data-product-id="${item.id}">
                    Add to cart
                </button>
                <ul class="more-list">
                    <li class="more edit" data-product-id="${item.id}">Edit</li>
                    <li class="more remove" data-product-id="${item.id}">Remove item</li>
                    <li class="more add" data-product-id="${item.id}">Add comment</li>
                </ul>
            </div>
            <div class="product-image">
                <img src="${escapeHtml(item.image || '/placeholder.jpg')}" alt="${escapeHtml(item.name)}" onerror="this.src='/placeholder.jpg'">
            </div>
        `;const addToCartBtn=article.querySelector('.addToCart');addToCartBtn.addEventListener('click',()=>addToCart(item.id));const removeBtn=article.querySelector('.remove');removeBtn.addEventListener('click',()=>removeFromWishlist(item.id));const divider=document.createElement('hr');wishlistGrid.appendChild(article);wishlistGrid.appendChild(divider)})}
function removeFromWishlist(productId){if(!productId)return;wishlist=wishlist.filter(item=>item.id!==productId);localStorage.setItem("wishlist",JSON.stringify(wishlist));updateWishlistUI();showNotification('Item removed from wishlist')}
function addToCart(productId){if(!productId)return;let cart=JSON.parse(localStorage.getItem("cart"))||[];const item=wishlist.find(item=>item.id===productId);if(item){cart.push(item);localStorage.setItem("cart",JSON.stringify(cart));showNotification('Added to cart!')}}
function escapeHtml(unsafe){return unsafe.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
function formatPrice(price){return typeof price==='number'?price.toFixed(2):'0.00'}
function showNotification(message){const notification=document.createElement('div');notification.className='notification';notification.textContent=message;notification.style.cssText=`
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #333;
        color: white;
        padding: 1rem;
        border-radius: 4px;
        animation: fadeIn 0.3s, fadeOut 0.3s 2.7s;
        z-index: 1000;
    `;document.body.appendChild(notification);setTimeout(()=>notification.remove(),3000)}
document.addEventListener('DOMContentLoaded',()=>{updateWishlistUI()});const style=document.createElement('style');style.textContent=`
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
`;document.head.appendChild(style)