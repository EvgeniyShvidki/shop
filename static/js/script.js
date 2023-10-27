// import products from "./data";

let sum = document.getElementsByClassName("sum")[0];
let basketDetails = document.getElementsByClassName("basket-details")[0];


let super45 = document.getElementsByClassName("super45")[0];
console.log(super45);
let close = document.getElementsByClassName("close")[0];
let modalWrapper = document.getElementsByClassName("modal-wrapper")[0];
let basket = [
  {
    id: "365",
    price: "12000",
    amount: "3",
  },
  {
    id: "256",
    price: "400",
    amount: "2",
  },
];



// function showProductsHTML() {
//   basketDetailsProducts.innerHTML = ''
//   for (let i = 0; i < basket.length; i++) {
 

//     basketDetailsProducts.innerHTML += `
//     <div class="item">
//         <h2 class='item-data item__title'><span>Назва товару:</span> ${
//           basket[i].title
//         }</h2>
//         <h2 class='item-data item__price'><span>Ціна 1 товару:</span>  <span class='basket__item-prise'>${
//           basket[i].price
//         }</span></h2>
//         <h2 class='item-data item__amount'> <span>Кількість:</span>
//         <div class="amount__info">
//           <button class='basket__minus'>-</button>
//           <input class="amount__input" value="${basket[i].amount}" type="text">
//           <button class='basket__plus'>+</button>
//         </div>
//         </h2>
//         <h2 class='item-data item__sum'><span>Загальна сума:</span> 
//         <span class="sum-product-total"> ${
//           basket[i].price * basket[i].amount
//         }</span>
//           </h2>
//         <button class='item__delete'>Видалити</button>
//         </div>
//     </div>
//     `;
//   }
// }


// showProductsHTML();

basketDetails.innerHTML += `
<div class="order-block">
  <span >Загальна сума: <span class='total-product-sum'>657</span></span>
  <button class="order-btn">Оформити замовлення</button>
</div>
          

`;

for (let i = 0; i < products.length; i++) {
  if (basket[0].id == products[i].id) {
    // alert(products[i].title)
  }
}

let productsEl = document.getElementsByClassName("products")[0];

function showProducts() {
  for (let i = 0; i < products.length; i++) {
    let starAmount = products[i].rating.toFixed(0);
    let starsHtml = "";
    for (let i = 0; i < starAmount; i++) {
      starsHtml += '<img src="../img/starfull.svg">';
    }

    let color = "";
    let colorText = 'black'

    if (products[i].discountPercentage < 5) {
      color = "skyblue";
    } else if (products[i].discountPercentage < 15) {
      color = "orange";
    } else if (products[i].discountPercentage > 15) {
      color = "red";
      colorText = 'white'
    }

    productsEl.innerHTML += `
        <div class="product">
            <img src="${products[i].thumbnail}" class='product__img' src="" alt="">
            <h2 class="product__title">${products[i].title}</h2>
            <div class="product__buy-wrapper">
                <div class="product__price-wrapper">
                    <h4 class="product__price">${products[i].price}$</h4>
                    <h4 class="product__discount" style="background: ${color}; color: ${colorText}">-${products[i].discountPercentage}%</h4>
                    <div class="stars">
                    ${starsHtml}
                    </div>
                </div>
                <div class="buy-wrapper">
                  <button class="product-buy product-buy1">Купити</button>
                  <a href="/ua/product/${i+1}" class="product-buy product-buy2">Детальніше</a>
               </div>  
            </div>
            <h3 class="product__description">${products[i].description}</h3>
        </div>
        
        
        `;
  }
}

showProducts();

let buy = document.getElementsByClassName("product-buy1");

for (let i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function (e) {
    buy[i].style.backgroundColor = "green";
    buy[i].textContent = "В корзині";
    let titleProduct =
      buy[i].parentNode.parentNode.parentNode.getElementsByClassName(
        "product__title"
      )[0].textContent;

    let price = parseInt(
      buy[i].parentNode.parentNode.getElementsByClassName("product__price")[0]
        .textContent
    ); // '500$' -> 500

    console.log(price, titleProduct);

    // alert(price)
    sum.textContent = +sum.textContent + +price;
    updatePriceProductTotal();

    let objectNewProduct = {
      id: "256",
      price: price,
      amount: "1",
    };

    // showProductsHTML()
    // super45.remove()
    let basketDetailsProducts = document.getElementsByClassName(
      "basket-details-products"
    )[0];
    console.log(
      "l:",
      document.getElementsByClassName("basket-details-products").length
    );
    console.log(basketDetailsProducts);

    // Create the outer div element with the class "item"
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";

    // Create and configure the first h2 element for the title
    const titleH2 = document.createElement("h2");
    titleH2.className = "item-data item__title";

    const titleSpan1 = document.createElement("span");
    titleSpan1.textContent = "Назва товару:";

    const titleSpan2 = document.createElement("span");
    titleSpan2.className = "title-product";
    titleSpan2.textContent = titleProduct;

    titleH2.appendChild(titleSpan1);
    titleH2.appendChild(titleSpan2);

    // Create and configure the second h2 element for the price
    const priceH2 = document.createElement("h2");
    priceH2.className = "item-data item__price";

    const priceSpan1 = document.createElement("span");
    priceSpan1.textContent = "Ціна 1 товару:";

    const priceSpan2 = document.createElement("span");
    priceSpan2.className = "basket__item-prise";
    priceSpan2.textContent = price;

    priceH2.appendChild(priceSpan1);
    priceH2.appendChild(priceSpan2);

    // Create and configure the third h2 element for the amount
    const amountH2 = document.createElement("h2");
    amountH2.className = "item-data item__amount";

    const amountSpan1 = document.createElement("span");
    amountSpan1.textContent = "Кількість:";

    const amountDiv = document.createElement("div");
    amountDiv.className = "amount__info";

    const amountMinusButton = document.createElement("button");
    amountMinusButton.className = "basket__minus";
    amountMinusButton.textContent = "-";

    const amountInput = document.createElement("input");
    amountInput.className = "amount__input";
    amountInput.setAttribute("value", "1");
    amountInput.setAttribute("type", "text");

    const amountPlusButton = document.createElement("button");
    amountPlusButton.className = "basket__plus";
    amountPlusButton.textContent = "+";

    amountDiv.appendChild(amountMinusButton);
    amountDiv.appendChild(amountInput);
    amountDiv.appendChild(amountPlusButton);

    amountH2.appendChild(amountSpan1);
    amountH2.appendChild(amountDiv);

    // Create and configure the fourth h2 element for the total sum
    const sumH2 = document.createElement("h2");
    sumH2.className = "item-data item__sum";

    const sumSpan1 = document.createElement("span");
    sumSpan1.textContent = "Загальна сума:";

    const sumSpan2 = document.createElement("span");
    sumSpan2.className = "sum-product-total";
    sumSpan2.textContent = price * 1;

    sumH2.appendChild(sumSpan1);
    sumH2.appendChild(sumSpan2);

    // Create the "Видалити" button
    const deleteButton = document.createElement("button");
    deleteButton.className = "item__delete";
    deleteButton.textContent = "Видалити";

    // Append all the elements to the outer "item" div
    itemDiv.appendChild(titleH2);
    itemDiv.appendChild(priceH2);
    itemDiv.appendChild(amountH2);
    itemDiv.appendChild(sumH2);
    itemDiv.appendChild(deleteButton);

    // Finally, add the "item" div to the document or any desired parent element
    basketDetailsProducts.appendChild(itemDiv);


    // basketDetailsProducts.innerHTML += `
    // <div class="item">
    //     <h2 class='item-data item__title'>
    //       <span>Назва товару:</span>
    //       <span class='title-product'> ${titleProduct} </span>
    //     </h2>
    //     <h2 class='item-data item__price'>
    //       <span>Ціна 1 товару:</span>  
    //       <span class='basket__item-prise'>${price}</span>
    //     </h2>
    //     <h2 class='item-data item__amount'> 
    //       <span>Кількість:</span>
    //       <div class="amount__info">
    //         <button class='basket__minus'>-</button>
    //         <input class="amount__input" value="1" type="text">
    //         <button class='basket__plus'>+</button>
    //       </div>
    //     </h2>
    //     <h2 class='item-data item__sum'>
    //       <span>Загальна сума:</span> 
    //       <span class="sum-product-total"> ${price * 1}</span>
    //     </h2>
    //     <button class='item__delete'>Видалити</button>
    //     </div>
    // </div>
    // `;

    let basketAmountMinus = document.getElementsByClassName("basket__minus");
    let basketAmount = document.getElementsByClassName("amount__input");
    let basketAmountPlus = document.getElementsByClassName("basket__plus");
    basketAmountPlus = basketAmountPlus[basketAmountPlus.length - 1];
    basketAmount = basketAmount[basketAmount.length - 1];
    basketAmountMinus = basketAmountMinus[basketAmountMinus.length - 1];

    basketAmountMinus.addEventListener("click", function () {
      if (basketAmount.value > 1) {
        basketAmount.value = basketAmount.value - 1;
        updatePriceProduct();
      }
    });

    basketAmountPlus.addEventListener("click", function () {
      if (basketAmount.value < 1000) {
        basketAmount.value = +basketAmount.value + 1;
        updatePriceProduct();
      }
    });

    console.log(basketDetailsProducts);
  });
}


let sumProductTotal1 = document.getElementsByClassName("sum-product-total")[0];
let sumProductTotal2 = document.getElementsByClassName("sum-product-total")[1];
let TOTAL_SUM_PRODUCT_BASKET =
  document.getElementsByClassName("total-product-sum")[0];
let basketPrice = document.getElementsByClassName("basket__item-prise")[0];

function updatePriceProduct() {
  let basketAmount = document.getElementsByClassName("amount__input");
  basketAmount = basketAmount[basketAmount.length - 1];
 
  sumProductTotal1.textContent = basketAmount.value * basketPrice.textContent;
  updatePriceProductTotal();
}

function updatePriceProductTotal() {
  try {
let sum = document.getElementsByClassName('sum')[0]
sum.textContent = +sumProductTotal1.textContent + +sumProductTotal2.textContent;
  TOTAL_SUM_PRODUCT_BASKET.textContent =
    +sumProductTotal1.textContent + +sumProductTotal2.textContent;
  } catch (e) {}

}

let orderBtn = document.getElementsByClassName("order-btn")[0];
orderBtn.addEventListener('click', function(){
  modalWrapper.style.display = "flex";
})

close.addEventListener('click', function(){
  modalWrapper.style.display = 'none'
})
let confirmOrderBtn = document.getElementsByClassName('confirm-order')[0]
let imputName = document.getElementsByClassName("form-input")[0];
let imputLastname = document.getElementsByClassName("form-input")[1];
let imputPhoneNumber = document.getElementsByClassName("form-input")[2];
let imputCity = document.getElementsByClassName("form-input")[3];
let imputPostNumber = document.getElementsByClassName("form-input")[4];
// let imputProducts = document.getElementsByClassName("form-input")[5];
let imputPayType = document.getElementsByClassName("form-input")[5];
let imputEmail = document.getElementsByClassName("form-input")[6];
let modalBody = document.getElementsByClassName('modal-body')[0]



document.getElementById('myForm').addEventListener("submit", function (e) {
  e.preventDefault()
  // https://t.me/order500700bot
  // let url =
  //   "https://api.telegram.org/bot[TOKEN]/sendMessage?chat_id=@[USERNAME]&text=hello";
  let token = "6225279206:AAGO7W9xX4PScAnrpU674rsCZNoLVhhNe2k";
  let myID = "1493530526";
  let yID = "957139896";
  let name = imputName.value;
  let lastname = imputLastname.value;
  let phoneNumber = imputPhoneNumber.value;
  let city = imputCity.value;
  let postNumber = imputPostNumber.value;
  let products_ = document.getElementsByClassName("title-product");
  let titles = ''
  for(let i = 0; i < products_.length; i++){
    titles += "%0A" +  products_[i].textContent ;
  }
  let payType = imputPayType.value;
  let email = imputEmail.value;
  let readyMessage = `
Прийшло нове замовлення %0A
дані про замовлення %0A
імя: ${name}%0A
призвіще:  ${lastname}%0A
номер телефону: ${phoneNumber}%0A
місто: ${city}%0A
номер пошти:  ${postNumber}%0A
товар: ${titles}%0A
тип оплати: ${payType}%0A
пошта: ${email}%0A
`;
  fetch(
    "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      myID +
      "&text=" +
      readyMessage
  );
  fetch(
    "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=" +
      yID +
      "&text=" +
      readyMessage
  );

  modalBody.innerHTML = '<h2 id="order-success">Ваше замовлення прийняте</h2>'
});
// gmail excel (google) tg bot sms* 0.40  crm(admin)
