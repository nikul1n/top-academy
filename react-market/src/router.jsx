import { createBrowserRouter } from "react-router"
import RootLayout from "./pages/RootLayout.jsx"
import CatalogPage from "./pages/CatalogPage.jsx"
import About  from "./pages/About.jsx"
import Cart from "./pages/Cart.jsx"

const router = createBrowserRouter ([
  {
    id: 'root',
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <CatalogPage />
      },
      {
        index: true,
        path: "/about",
        element: <About />
      },      {
        index: true,
        path: "/cart",
        element: <Cart />
      }
    ],
  },
])

export default router