import Button from "../Componentesdeeventos/Button"

function Evento() {
    function meuEvento() {
        console.log('Ativando primeiro evento ')
    }
    return (
        <div>
            <p> Clique para disparar um evento</p>
            <Button event={meuEvento}  text="Primeiro e evento"></Button>
           
        </div>
    )
}

export default Evento