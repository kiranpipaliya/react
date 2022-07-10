
import { useParams } from "react-router-dom";
const ProductDetail = () => {
    const param = useParams()
    console.log(param);
    return <div>
        <h1>Product  Details</h1>
        <p>{param.productId}</p>
    </div>
}
export default ProductDetail;