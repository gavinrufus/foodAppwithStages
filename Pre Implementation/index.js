let addItemToCart = (productId, imageUrl, productName, price) => {
    let cartTable = document.getElementById('cart-table')
    console.log(cartTable)
    let cartItem = document.createElement('tr')
    cartItem.innerHTML = 
    `
    <td id = "td_${productId}">
        <div class="cart-info">
            <img src="${imageUrl}">
                <div>
                    <h3>${productName}</h3>
                    <small>Price: QAR ${price}</small><br>
                    <a href="">Remove</a>
                </div>
        </div>
    </td>
    <td><input id="qty_${productId}" type="number" min = "1" value="1" onchange="changeSubtotal(this.value, ${price}, ${productId})" /></td>
    <td id="sub_${productId}">QAR ${price}</td> 
    `
    cartTable.appendChild(cartItem)
    console.log(cartItem)
}

let displayCartItems = (cartItems) => {
    cartItems.forEach(item => {
        let cartTable = document.getElementById('cart-table')
    console.log(cartTable)
    let cartItem = document.createElement('tr')
    cartItem.innerHTML = 
    `
    <td id = "${item.productId}">
        <div class="cart-info">
            <img src="${item.imageUrl}">
                <div>
                    <h3>${item.productName}</h3>
                    <small>Price: QAR ${item.price}</small><br>
                    <a href="">Remove</a>
                </div>
        </div>
    </td>
    <td><input id="qty_${item.productId}" type="number" min = "1" value="1" onchange="changeSubtotal(this.value, ${item.price}, ${item.productId})" /></td>
    <td id="sub_${item.productId}">QAR ${item.price}</td> 
    `
    cartTable.appendChild(cartItem)
        
    });
}

let changeSubtotal = (quantity, unitPrice, productId) => {
    let subtotal = quantity*unitPrice
    let subItem = document.getElementById(`sub_${productId}`)
    subItem.innerHTML = `QAR ${subtotal}`
}

let changeTotalPrice = (subtotal, productId) => {
    let changeTotalPrice = subtotal
}

let cartItems = [
    {
        productId: 1,
        imageUrl: "images/Colddrinks/AvocadoJuice.jpg",
        productName: "Avocado Juice",
        price: 23
    },
    {   
        productId: 2,
        imageUrl: "images/Colddrinks/AppleJuice.jpg",
        productName: "Apple Juice",
        price: 21
    },
    {
        productId: 3,
        imageUrl: "images/Colddrinks/AvocadoJuice.jpg",
        productName: "Avocado Juice",
        price: 23
    },
  
]

displayCartItems(cartItems)

