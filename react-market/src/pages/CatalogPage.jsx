import Product from "./Product"
import "./CatalogPage.css"
import { Link } from "react-router"

function CatalogPage() {
    // <div></div>
    const products =
        [{
            id: 1,
            name: "iphone",
            price: 100,
            image: "./images/orig.png"
        },
        {
            id: 2,
            name: "samsung",
            price: 100,
            image: `./images/1047076_r6354.jpg`
        },
        {
            id: 3,
            name: "huawei",
            price: 100,
            image: "./images/358.webp"
        }]

    return (
        <section className="products-list">
            <ul>

                {products?.map((products) => (
                    <Link to={`/products/${products.id}`}>
                        <article>
                            <Product {...products} />
                        </article>
                    </Link>)
                )}
            </ul>
        </section>
    )

    // while (products) {
    //     <div>
    //         <ul>
    //             <li>
    //         {/* return (
    //             ${products}
    //     ) */}
    //             </li>
    //         </ul>
    //     </div>
    // }


}

export default CatalogPage