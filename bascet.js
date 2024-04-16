const anaDiv = document.querySelector('.productsCards')

function getCartData() {
    anaDiv.innerHTML = ``
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((item, index) => {
    let box = document.createElement("div");
    box.className = "productsCard";
    box.innerHTML = `
            <img
              src=${item.thumbnail}
              alt=""
              style="width:100%;height:100px"
            />
            <div class="cardDesc">
              <h3>${item.title}</h3>
              <p>${item.price}</p>
              <button class="cartBtn" onclick="deleteItem(${index})">DELETEㅤ<i class="fa-solid fa-trash"></i></button>
            </div>
            `;
    anaDiv.appendChild(box);
  });
}


function deleteItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getCartData()
}

getCartData()











// const anaDiv = document.querySelector('.productsCards')

// function getCartData() {
//     anaDiv.innerHTML = ``
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   cart.forEach((item, index) => {
//     let box = document.createElement("div");
//     box.className = "productsCard";
//     box.innerHTML = `
//             <img
//               src=${item.thumbnail}
//               alt=""
//               style="width:100%;height:100px"
//             />
//             <div class="cardDesc">
//               <h3>${item.title}</h3>
//               <p>${item.price}</p>
//               <button class="cartBtn" onclick="deleteItem(${index})">Sil</button>
//             </div>
//             `;
//     anaDiv.appendChild(box);
//   });
// }

// function addToBasket(id) {
//     let basket = JSON.parse(localStorage.getItem('bascet')) || []
//     basket.push(db.find(item => item.id == id))
//     localStorage.setItem('bascet', JSON.stringify(bascet))
//     addProducts()
// }

// window.onload = () => {
//     getAllData()
// }



// const anaDiv = document.querySelector('.productsCards')

// function getCartData() {
//     anaDiv.innerHTML = ``
//   let cart = JSON.parse(localStorage.getItem("container")) || [];
//   cart.forEach((item, index) => {
//     let box = document.createElement("div");
//     box.className = "productsCard";
//     box.innerHTML = `
//             <img
//               src=${item.thumbnail}
//               alt=""
//               style="width:100%;height:100px"
//             />
//             <div class="cardDesc">
//               <h3>${item.title}</h3>
//               <p>${item.price}</p>
//               <button class="cartBtn" onclick="deleteItem(${index})">Sil</button>
//             </div>
//             `;
//     anaDiv.appendChild(box);
//   });
// }