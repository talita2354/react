

import { Link } from "react-router-dom"

function HOME (){
    return(
        <header>
            <nav>
                <ul>

        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/missao'>MISSÃO</Link></li>
        <li><Link to='/produto'>PRODUTO</Link></li>
        <li><Link to='/nossa'>NOSSA HISTORIA</Link></li>
        <li><Link to='/contato'>CONTATO</Link></li>
       
     
                </ul>
            </nav>
        </header>
    )
}

export default HOME