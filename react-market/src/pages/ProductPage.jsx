import "./ProductPage.css"
import { useLoaderData } from "react-router";

function ProductPage() {
    const product = useLoaderData();
    return (
        <div className="product-item">
            <div className="product-name">{product.title}</div>
            <div className="product-image">{product.image}</div>
            <div className="product-price">{product.price}</div>
            {/* <div className="product-image"><img src={phones.image} alt="" /></div> */}
            {/* <div className="product-price">{phones.price}</div> */}
        </div>
    )
}

export default ProductPage
