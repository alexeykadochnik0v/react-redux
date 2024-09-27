import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "../redux/productSlice";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);

    return (
        <div>
            <h2>Каталог товаров</h2>
            <div className="content">
                {products.map(product => (
                    <div className="product" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: {product.price}</p>
                        <button onClick={() => dispatch(selectProduct(product.id))}>Выбрать</button>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ProductList;