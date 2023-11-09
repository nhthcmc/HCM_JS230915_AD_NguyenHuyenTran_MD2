import React from 'react'

export default function Test() {
    return (
        <div>
            <button onClick={(e) => {
                let cart = JSON.parse(localStorage.getItem('cart') ?? "[]")
                let cartExist = cart.find(itemFind => itemFind.productId == item.id);

                if (cartExist) {
                    cartExist.quantity += Number(e.target.parentNode.querySelector(".quantity").value);
                    localStorage.setItem("cart", JSON.stringify(cart))
                } else {
                    localStorage.setItem("cart", JSON.stringify([...cart, {
                        id: randomId(),
                        productId: item.id,
                        quantity: Number(e.target.parentNode.querySelector(".quantity").value)
                    }]))
                }
                setLoad(!load)
            }}>Mua Ngay</button>
        </div>
    )
}


, Number(e.target.previousSibling.value)