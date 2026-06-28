import "./Product.css"

function Product ( {name, price, image} ) {
        return (
        <div className="product-item">
            <div className="product-name">{name}</div>
            <div className="product-image"><img src={image} alt="" /></div>
            <div className="product-price">{price}</div>
        </div>
    )
}

export default Product
