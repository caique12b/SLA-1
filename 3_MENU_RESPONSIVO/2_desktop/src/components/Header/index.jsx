import './index.css'
import{ useState } from "react"

import { List,X } from "@phosphor-icons/react"


function Header() {
    const [alexandre , setAlexandre] = useState(false) 
  
    function handleAlexandreMenu(){
        if(alexandre){
            setAlexandre(false)
            return
        }
        setAlexandre(true)
    }

    return (
    <header>
        <div className="menu-mobile">
            <div className="botao-menu">
                <button onClick={handleAlexandreMenu}>{alexandre== true ?<X size={32} /> :<List size={32} /> }</button>
            </div>
            
            <div className={`menu ${alexandre==true ? "" : "close"}`}>
                <nav>
                    <a href="">Configurações</a>
                    <a href="">Login</a>
                    <a href="">Sobre</a>
                </nav>
            </div>
        </div>

        <div className="menu-desktop">
            <h1>Acessa ai </h1>
                
                <nav>
                    <a href="">Configurações</a>
                    <a href="">Login</a>
                    <a href="">Sobre</a>
                </nav>
        </div>
    </header>
  )
}

export default Header