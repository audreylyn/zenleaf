const featuredPlants=[{image:"./assets/images/carousel/Sage Serenity.png",alt:"Sage Serenity",topic:"Sage Serenity",shortDesc:"Sage Serenity is known for its soft, grey-green leaves and earthy aroma. It's a versatile herb that can be used for culinary, medicinal, and ornamental purposes, adding both beauty and functionality to your garden.",longDesc:"Sage Serenity is a hardy perennial herb with a rich history of use in cooking, medicine, and rituals. It flourishes in full sun and well-drained soil, making it an excellent choice for herb gardens and containers. The leaves of Sage Serenity are not only attractive but also useful in various dishes, providing a distinct, savory flavor."},{image:"./assets/images/carousel/Dazzling Aglaonema.png",alt:"Aglaonema",topic:"Aglaonema",shortDesc:"The  Aglaonema is a visually striking plant known for its vibrant, colorful foliage. It's perfect for brightening up any indoor space and is relatively easy to care for, making it a popular choice among plant enthusiasts.",longDesc:"The  Aglaonema, also known as Chinese Evergreen, features a variety of leaf patterns and colors ranging from green to red and pink. It thrives in low to medium light conditions and prefers well-draining soil. Regular watering is necessary, but it’s important to let the soil dry out between waterings to prevent root rot."},{image:"./assets/images/shop/plants/best_seller.png",alt:"Lavender Bliss",topic:"Lavender Bliss",shortDesc:"Lavender Bliss is a delightful plant known for its fragrant purple flowers and calming properties. Ideal for both indoor and outdoor gardens, it adds a touch of elegance and tranquility to any space.",longDesc:"Lavender Bliss is celebrated for its soothing scent and beautiful blooms. It thrives in full sun and well-drained soil, making it perfect for gardens and containers. Regular pruning encourages more blooms and helps maintain its shape. Beyond its visual appeal, Lavender Bliss is also known for its therapeutic benefits, such as promoting relaxation and improving sleep quality."}];function generatePlants(plant){return `
        <div class="item">
            <img src="${plant.image}" alt="${plant.alt}">
            <div class="introduce">
                <div class="title">Featured Plants</div>
                <div class="topic">${plant.topic}</div>
                <div class="des">
                    ${plant.shortDesc}
                </div>
                <button class="seeMore">View More &#8599;</button>
            </div>
            <div class="detail">
                <div class="title right">${plant.topic}</div>
                <div class="des">
                    ${plant.longDesc}
                </div>
                <div>
                    <button class="back">&#8592; Back</button>
                </div>
            </div>
        </div> 
    `}
function attachEventListeners(){document.querySelectorAll('.seeMore').forEach(button=>{button.onclick=function(){document.querySelector('.carousel').classList.remove('next','prev');document.querySelector('.carousel').classList.add('showDetail')}});document.querySelectorAll('.back').forEach(button=>{button.onclick=function(){document.querySelector('.carousel').classList.remove('showDetail')}})}
document.addEventListener('DOMContentLoaded',function(){const carouselList=document.querySelector('.carousel .list');carouselList.innerHTML='';featuredPlants.forEach(plant=>{carouselList.innerHTML+=generatePlants(plant)});attachEventListeners()});let nextButton=document.getElementById('next');let prevButton=document.getElementById('prev');let carousel=document.querySelector('.carousel');let listHTML=document.querySelector('.carousel .list');let unAcceppClick;const showSlider=(type)=>{nextButton.style.pointerEvents='none';prevButton.style.pointerEvents='none';carousel.classList.remove('next','prev','showDetail');let items=document.querySelectorAll('.carousel .list .item');if(type==='next'){listHTML.appendChild(items[0]);carousel.classList.add('next')}else{listHTML.prepend(items[items.length-1]);carousel.classList.add('prev')}
attachEventListeners();clearTimeout(unAcceppClick);unAcceppClick=setTimeout(()=>{nextButton.style.pointerEvents='auto';prevButton.style.pointerEvents='auto'},2000)}
nextButton.onclick=function(){showSlider('next')}
prevButton.onclick=function(){showSlider('prev')}