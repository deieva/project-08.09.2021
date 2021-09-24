function Header() {

    return (
        <div>

            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <svg className="bi me-2"style={{width: '40', height: '32'}}><use href="#bootstrap" /></svg>
                        <span className="fs-4">Double header</span>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>
                </div>
            </header>

        </div>
    )
}

export default Header;