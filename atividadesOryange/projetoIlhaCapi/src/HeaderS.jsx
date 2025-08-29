import './assets/images/clubpenguinLogo.png'
import Inicio from './pages/inicio.jsx'

export default function HeaderS() {
    return (
        <div>
        <a href='./pages/home.jsx' class="HeaderLogo"><img src="./assets/images/clubpenguinLogo.png" class="HeaderLogo" /></a>
        <div class="HeaderSiteSelect">
            <p class="headerlinkleft"></p>
            <a href="inicio.html"><p class="HeaderSiteSelectLinks">Inicio</p></a>
            <p class="headerlinkmiddle">|</p>
            <a href="download.html"><p class="HeaderSiteSelectLinks">Download</p></a>
            <p class="headerlinkmiddle">|</p>
            <a href="sobre.html"><p class="HeaderSiteSelectLinks">Sobre</p></a>
            <p class="headerlinkmiddle">|</p>
            <a href="contato.html"><p class="HeaderSiteSelectLinks">Contato</p></a>
            <p class="headerlinkright"></p>
        </div>
        <div class="HeaderLoginRegister">
            <a href="login.html"><p class="HeaderLogin">Login</p></a>
            <a href="cadastro.html"><p class="HeaderCadastro">Cadastrar</p></a>
        </div>
        </div>
    )
}