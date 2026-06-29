import "./CatalogPage.css"
import { Link, useLoaderData } from "react-router"
import ProductPage from "./ProductPage";
import { preinitModule } from "react-dom";
// import { ProductsAPI } from "../../API/ProductsAPI.js"

function CatalogPage() {
    const products = useLoaderData();
    return (
        <section className="products-list">
            <ul>
                {products.map((product) => (
                    <Link to={`/products/${product.id}`}>
                        <article>
                            <span>{product.title}</span>
                            <div><img src={`${product.image}`} alt="" /> </div>
                        </article>
                    </Link>)
                )}
            </ul>
        </section>
    )
}

export default CatalogPage



    // const products =
    //     [{
    //         id: 1,
    //         name: "iphone",
    //         price: 100,
    //         image: "./images/orig.png"
    //     },
    //     {
    //         id: 2,
    //         name: "samsung",
    //         price: 100,
    //         image: `./images/1047076_r6354.jpg`
    //     },
    //     {
    //         id: 3,
    //         name: "huawei",
    //         price: 100,
    //         image: "./images/358.webp"
    //     }]