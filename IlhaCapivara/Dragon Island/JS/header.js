const head=document.head
const body=document.body

const stylesheet='<link rel="stylesheet" href="../CSS/Header.css"></link>'
head.innerHTML+=stylesheet

const Header=document.createElement("Header")
Header.setAttribute("id", "Header")
Header.setAttribute("class","Header")
body.prepend(Header)

const HeaderHtml=
        '<a href="inicio.html" class="HeaderLogo"><img src="../Images/clubpenguinLogo.png" class="HeaderLogo"></a>'+
        '<div class="HeaderSiteSelect">'+
            '<p class="headerlinkleft"></p>'+
            '<a href="inicio.html"><p class="HeaderSiteSelectLinks">Inicio</p></a>'+
            '<p class="headerlinkmiddle">|</p>'+
            '<a href="download.html"><p class="HeaderSiteSelectLinks">Download</p></a>'+
            '<p class="headerlinkmiddle">|</p>'+
            '<a href="sobre.html"><p class="HeaderSiteSelectLinks">Sobre</p></a>'+
            '<p class="headerlinkmiddle">|</p>'+
            '<a href="contato.html"><p class="HeaderSiteSelectLinks">Contato</p></a>'+
            '<p class="headerlinkright"></p>'+
        '</div>'+
        '<div class="HeaderLoginRegister">'+
            '<a href="login.html"><p class="HeaderLogin">Login</p></a>'+
            '<a href="cadastro.html"><p class="HeaderCadastro">Cadastrar</p></a>'+
        '</div>'

Header.innerHTML+=HeaderHtml