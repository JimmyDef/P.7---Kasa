import {Link} from "react-router-dom"
import logoKasa from './../../assets/kasa_logo_red.png'
import './header.scss'

function Header(){
    return (
<header>
<img src={logoKasa} alt="logo  Kasa" />
<nav>
    <ul className="uppercase">
        <li><Link className="link-size" to="/">Accueil</Link></li>
        <li><Link className="link-size" to="/about">A Propos</Link></li>
    </ul>
    
</nav>
</header>
    )
}

export default Header