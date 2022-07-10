
import { Link } from "react-router-dom";

const Product = () => {
    return <div>
        <h1>Product Page</h1>

        <ul>
            <li>
                <Link to="/product/p1">  A-book</Link>
            </li>
            <li>
                <Link to="/product/p2">  A-Cartpet</Link>
            </li>
            <li>
                <Link to="/product/p3">  A-Online Curse</Link>
            </li>
        </ul>
    </div>
}
export default Product;