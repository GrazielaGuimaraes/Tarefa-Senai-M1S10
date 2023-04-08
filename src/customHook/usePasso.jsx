import { useState } from "react"


//Vai receber o array de componentes de App.jsx (steps)
function usePassos(steps) {

    //Inicia com 0, pois o array inicia na posição 0
    const [indexAtual, setIndexAtual] = useState(0)

    function mudarIndex(index, evento) {

        evento.preventDefault()

       
        if(index < 0 || index >= steps.length){
            return  //Apenas pare por aqui
        }

        setIndexAtual(index)

    }

    
    return {
        indexAtual,

        //O componente a ser exibido através do index do array
        componenteAtual: steps[indexAtual],
        mudarIndex,

        //vai receber o tamanho do array de componentes + 1
        ultimoIndex: indexAtual + 1 === steps.length ? true : false

    }
}

export default usePassos