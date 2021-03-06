import '../Assets/Css/Header.css';

function Header() {

    return (
        <div>

            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="/categories" className="nav-link link-dark px-2">Categories</a></li>
                        <li className="nav-item"><a href="/cart" className="nav-link link-dark px-2">Cart</a></li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item"><a href="/login" className="nav-link link-dark px-2">Login</a></li>
                        <li className="nav-item"><a href="/signin" className="nav-link link-dark px-2">Sign up</a></li>
                    </ul>
                </div>
            </nav>

            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <svg className="bi me-2" style={{ width: '40', height: '32' }}><use href="#bootstrap" /></svg>
                        <span className="fs-4">Tech space shop</span>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input type="search" className="form-control search" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>

            </header>

        </div>
    )
}

export default Header;