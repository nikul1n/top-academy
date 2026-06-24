import { Link, Outlet } from "react-router"

function RootLayout() {
    return (
        <div className="app-shell">
            <header className="topbar">
                
                <Link className="brand" to="/">
                Threadline
                </Link>
            </header>
            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default RootLayout