
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="" alt="" width="30" height="24"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item p-2">
                            <a className="nav-link" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link" href="#">Camisetas</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link" href="#">Carrito</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link">Registrarse</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link">Iniciar sesion</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar