let cart=JSON.parse(localStorage.getItem('cart'))||[];let promoCode='';let discount=0;const promoCodes={'DISCOUNT10':10,'SAVE20':20,'FREESHIP':0};function addToCart(product){const existingItem=cart.find(item=>item.id===product.id);if(existingItem){existingItem.quantity+=1}else{cart.push({...product,quantity:1})}
alert(`${product.name} has been added to your cart!`);updateCartStorage();updateCartUI()}
function removeFromCart(productId){cart=cart.filter(item=>item.id!==productId);updateCartStorage();updateCartUI()}
function updateQuantity(productId,newQuantity){const item=cart.find(item=>item.id===productId);if(item){item.quantity=Math.max(0,newQuantity);if(item.quantity===0){removeFromCart(productId)}else{updateCartStorage();updateCartUI()}}}
function updateCartStorage(){localStorage.setItem('cart',JSON.stringify(cart))}
function applyPromoCode(code){if(promoCodes.hasOwnProperty(code)){promoCode=code;discount=promoCodes[code];alert(`Promo code applied: ${code}`)}else{promoCode='';discount=0;alert('Invalid promo code!')}
updateCartUI()}
function updateCartUI(){const cartContainer=document.querySelector('.shopping-cart tbody');const cartItemCount=document.querySelector('.cart-no-items');const orderSummaryTotal=document.querySelector('.order-info:last-of-type h4:last-child');if(!cartContainer)return;const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);cartItemCount.textContent=`${totalItems} Items`;const totalCost=cart.reduce((sum,item)=>sum+(item.price*item.quantity),0);const discountedCost=discount>0?totalCost-(totalCost*discount/100):totalCost;orderSummaryTotal.textContent=`₱${discountedCost.toFixed(2)}`;cartContainer.innerHTML=cart.map(item=>`
        <tr>
            <td>
            <div class="product-details">
                <img src="${item.image}" alt="${item.name}">
                <div class="details-info">
                    <h4 class="product-name">${item.name}</h4>
                    <h4 class="product-price">₱${item.price}</h4>
                    <h4 class="product-remove" onclick="removeFromCart(${item.id})">Remove</h4>
                </div>
            </div>
            </td>
            <td>
                <div class="qpt-box">
                    <span class="minus" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" stroke-width="2">
                            <path d="M5 12l14 0"></path>
                        </svg>
                    </span>
                    <span class="no-items">${item.quantity}</span>
                    <span class="plus" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20" height="20" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor">
                            <path d="M12 5l0 14"></path>
                            <path d="M5 12l14 0"></path>
                        </svg>
                    </span>
                </div>
            </td>
            <td>
                <div class="qpt-box">
                    <span class="qpt-product-price">₱${item.price}</span>
                </div>
            </td>
            <td>
                <div class="qpt-box">
                    <span class="qpt-product-total">₱${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </td>
        </tr>
    `).join('')}
document.addEventListener('DOMContentLoaded',()=>{const applyButton=document.querySelector('.apply-btn');const promoInput=document.querySelector('.promo-code input');applyButton.addEventListener('click',()=>{const code=promoInput.value.trim().toUpperCase();applyPromoCode(code)});updateCartUI()});document.addEventListener('DOMContentLoaded',()=>{const checkoutButton=document.querySelector('.checkout');if(checkoutButton){checkoutButton.addEventListener('click',function(e){e.preventDefault();cart=[];localStorage.removeItem('cart');updateCartUI();window.location.href='./thanks.html'})}})