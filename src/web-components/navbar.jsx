function Navbar() {
    return (
        <header>
            <div className="header-wrapper">
                <div className="logo header-left">
                    <a href="index.html">
                        <img src="https://trydo.rainbowit.net/assets/images/logo/logo-light.png" alt="" className="img-fluid" />
                    </a>
                </div>
                <ul className="d-flex align-items-center justify-content-between gap-5 header-right">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Pages</li>
                    <li>Blocks</li>
                    <li>Contact</li>
                    <div className="header-btn">
                        <a href="index.html" className="rn-btn">Buy Now</a>
                    </div>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;