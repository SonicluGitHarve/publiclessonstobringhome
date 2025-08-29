import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../pages/inicio.jsx'
import Login from '../pages/login.jsx'
import Sobre from '../pages/sobre.jsx'

export default function RouterApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/cadastro" element={<Cadastro />} /> */}
                {/* <Route path="/contato" element={<Contato />} /> */}
                {/* <Route path="/download" element={<Download />} /> */}
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}