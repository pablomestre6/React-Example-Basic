import { useState } from "react";

function Condicional () {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState

    function enviarEmail (e) {
    e.preventDefault()
    setUserEmail(email)
    console.log(userEmail)
    }

    return(
        <div>
            <h1>Cadastre seu emaail</h1>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}></input>
                <button onClick={enviarEmail}>Enviar emaail</button>
                <userEmail> </userEmail>
            </form>
          
        </div>
    )
}

export default Condicional