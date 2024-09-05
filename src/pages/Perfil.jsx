

import { Link } from "react-router-dom"
import '../css/perfil.css'

export default function Perfil() {
    return (


<>
<div>
<div class="profile-container">
        <div class="profile-header">
            <img src="fotoperfil.png" alt="Foto do perfil" class="profile-image" />
            <h1 class="profile-name">Usuario Generoso</h1>
            <p class="profile-bio">Doador Semanal | Generoso | Apaixonado em Ajudar</p>
        </div>
        <div class="profile-content">
            <h2>Nome Completo</h2>
            <p>Usuario Generoso Da Informatica</p>
            <h2>Apelido</h2>
            <p>Coracao Generoso </p>
            <h2>E-mail</h2>
            <p>UsuarioGeneroso@gmail.com</p>
            <h2>CPF</h2>
            <p>999.999.999 - 99</p>
        </div>

               <br/>
               <br/>
               <br/>
               <br/>
               
        <div class="profile-footer">
            
        <Link to={"/Home"}>
        <a class="social-link">Voltar</a>
               </Link>
           
             
        </div>
    </div>
</div>
</>
    )
    }