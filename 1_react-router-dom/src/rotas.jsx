import { Routes, Route } from 'react-router-dom'

import Home from './paginas/Home'
import Joao from './paginas/Joao'

function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/joao' element={<Joao/>} />
        </Routes>
    )

}

export default Rotas

/*<Route path='' element={} /> */