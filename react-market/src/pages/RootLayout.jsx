import { Link, NavLink, Outlet } from "react-router"
import './RootLayout.css'

function RootLayout() {
    return (
        <div className="app-shell">
            <header className="topbar">

                <Link className="brand" to="/">
                    Threadline
                </Link> 
                <nav className="nav-links" aria-label="Primary navigation">
                    <NavLink
                        className={(o) => `${o.isPending ? "Pending" : ""} ${o.isActive ? "active" : ""}`}
                        to="/">
                        Catalog
                    </NavLink>
                    <NavLink
                        className={(o) => `${o.isPending ? "Pending" : ""} ${o.isActive ? "active" : ""}`}
                        to="/about">
                        About
                    </NavLink>
                    <NavLink
                        className={(o) => `${o.isPending ? "Pending" : ""} ${o.isActive ? "active" : ""}`}
                        to="/cart">
                        Cart
                    </NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default RootLayout