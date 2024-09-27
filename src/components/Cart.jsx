import { useSelector } from "react-redux";

const Cart = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const selectedProduct = useSelector(state => state.products.selectedProduct);
    if (!selectedProduct) {
        return null
    }
    return (
        <div>
            <h2>Корзина</h2>
            <p>Название товара: {selectedProduct.name}</p>
            <p>Цена товара: {selectedProduct.price}</p>
            <p>Количество товаров {quantity}</p>
        </div>

    );
}

export default Cart;