import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/cartSlice";


const Product = () => {
    const dispatch = useDispatch();
    const quantity = useSelector((state) => state.cart.quantity);
    const selectedProduct = useSelector((state) => state.products.selectedProduct);

    if (!selectedProduct) {
        return null
    }

    return (
        <div>
            <h2>Выбранные продукты</h2>
            <p>{selectedProduct.name}</p>
            <p>{selectedProduct.description}</p>
            <p>{selectedProduct.price}</p>
            <div className="count">
                <button onClick={() => dispatch(decrement())}>-</button>
                <p>{quantity}</p>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </div>
    );
}

export default Product;