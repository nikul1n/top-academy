import { createBrowserRouter } from "react-router"
import RootLayout from "./pages/RootLayout.jsx"
import CatalogPage from "./pages/CatalogPage.jsx"
import About from "./pages/About.jsx"
import Cart from "./pages/Cart.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import productsApi from "../api/ProductsAPI.js"
import cartApi from "../api/cartApi.js"

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        loader: productsApi.getAll,
        element: <CatalogPage />
      },
      {
        path: "/about",
        element: <About />
      }, {
        loader: cartApi.get(),
        path: "/cart",
        element: <Cart />
      },
      {
        loader: ({ params }) => productsApi.get(params.id),
        path: "/products/:id",
        element: <ProductPage />
      }
    ],
  },
])

export default router