foodItem: {
    id: int,
    name: string,
    description: string,
    price: float,
    image: string,
    rating: float,
    numReviews: int
}

user: {
    userId: int,
    mailId: string,
    
}

category: {
    categoryId: int,
    categoryName: string
    foodItems:foodItem_id[]
}

cartItem: {
    sessionId: int,
    foodItem: foodItem_id,
    quantity: int,
    totalPrice: float,
}

cart: {
    user: userId
    cartId: int,
    CartItems: cartItem_id[]
    cartValue: float,
}

order: {
    user: userId,
    orderId: int,
    cart: cartId,
    cartValue: orderValue
}

processFlow:
filterProducts -> add products to cart -> place order

workFlow:
create database -> start note project -> create mongodb models -> 