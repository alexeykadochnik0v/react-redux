import { useSelector } from "react-redux";

const Total = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const selectedProduct = useSelector(state => state.products.selectedProduct);
    if (!selectedProduct) {
        return null
    }
    return (
        <div>
            <h2>Итого</h2>
            <h3>Общая стоимость: {quantity * selectedProduct.price} руб</h3>
        </div>

    );
}

export default Total;