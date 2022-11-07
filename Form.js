import {useState} from 'react'


function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault() //PARA NÃO PASSAE PARA O BACK END E SERVIDOR
        console.log('Cadastrou o usuario')
    }
    const [name, setName] = useState() //Variaveis para enviar para o back end
    const [passoword, setPassoword] = useState()
    

    return (
        <div>
            <h1> Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
               <div>
                  <label htmlFor="name">Nome</label> 
                  <input
                   type="Text"
                    id="name" 
                    placeholder="Digite seu Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ></input>
               </div>
               <div>
               <label htmlFor="password">Senha</label>
                  <input
                  type="passwaord"
                  id="password"
                  name="password" 
                  placeholder="Digite sua senha"
                  onChange={(e) => setPassoword(e.target.value)} //Definir rota no sistema
                  ></input>
                  
               </div>
               <div>
                <input type="submit" value="Cadastrar"></input>
               </div>
            </form>
        </div>
    )
}

export default Form