
const div = document.querySelector('.productsCards')
const count = document.querySelector('.alo')


let db

function getAllData() {
    axios.get('https://dummyjson.com/products').then(res => {
            db = res.data.products
            db.forEach(item => {
                let box = document.createElement("div");
                box.className = "productsCard";
                box.innerHTML = `
                <img src=${item.thumbnail} alt="">
                        <div class="cardDesc">
                        <h3>${item.title}</h3>
                        <span>${item.brand}</span>
                        <strong>${item.price}</strong>
                        <button class="productBtn" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i>ㅤADD TO CART</button>
                        </div>
                `
                div.appendChild(box)
            })
        })
}



// let cart = JSON.parse(localStorage.getItem('cart'))
// if(cart.length != 0){
//   count.innerHTML = cart.length
// } else {
//   count.style.display = 'none'
// }

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

getAllData();






// const anaDiv = document.querySelector(".productsCards");

// let db 
// function getAllData() {
//   axios.get("https://dummyjson.com/products").then((res) => {
//     db = res.data.products;
//     db.forEach((item) => {
//       let box = document.createElement("div");
//       box.className = "productsCard";
//       box.innerHTML = `
//             <img
//               src=${item.thumbnail}
//               alt=""
//               style="width:100%;height:100px"
//             />
//             <div class="cardDesc">
//               <h3>${item.title}</h3>
//               <span>${item.price}</span>
//               <button class="productBtn" onclick="addToCart(${item.id})">Sebete ekle</button>
//             </div>
//             `
//             anaDiv.appendChild(box)
//     });
//   });
// }






// const div = document.getElementById("productsSec");


// axios.get('https://dummyjson.com/products')
//     .then(res => {
//         let db = res.data;
//         db.forEach(item => {

//             let box = document.createElement('div');
//             box.className = 'containerProduct'; 
//             box.innerHTML = `
//                 <div class="cart">
//                     <img src="${item.thumbnail}" alt="">
//                     <div class="cardDesc">
//                         <h3>${item.description}</h3>
//                         <span>${item.title}</span>
//                         <strong>$${item.price}</strong>
//                     </div>
//                     <button class="productBtn">ADD TO CART</button>
//                 </div>
//             `;

//             productsSec.appendChild(box);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

