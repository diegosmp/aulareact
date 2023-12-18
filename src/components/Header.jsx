import { Link } from "react-router-dom";
import './header.css'

export default function Header(){
    return(
        <header className="header">
            <Link>
                <h1 className="header-logo">Logo</h1>
            </Link>
            <nav>
                <ul className="header-list">
                    <li><Link className="header-link" to="/">Inicio</Link></li>
                    <li><Link className="header-link" to="/about">Sobre</Link></li>
                    <li><Link className="header-link" to="/contact">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}