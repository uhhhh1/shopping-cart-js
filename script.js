let shoppingCart = [];      //Creates array for shopping cart
let appleButton = document.querySelector('#add-apple');  
let mangoButton = document.querySelector('#add-mango');    //gets aple button
let cartList = document.querySelector('#cart-items');   //gets cart ul

console.log(shoppingCart);

appleButton.addEventListener("click", () =>{
    shoppingCart.push("Apple");
    let li = document.createElement("li");
    li.textContent = "Apple";
    cartList.appendChild(li);
});

appleButton.addEventListener("click", () =>{
    shoppingCart.push("Apple");
    let li = document.createElement("li");
    li.textContent = "Apple";
    cartList.appendChild(li);
});

mangoButton.addEventListener("click", () =>{
    shoppingCart.push("Mango");
    let li = document.createElement("li");
    li.textContent = "Mango";
    cartList.appendChild(li);
});