import { GrFormNextLink, GrFormPrevious } from "react-icons/gr"
import { FiSend } from "react-icons/fi"
import './App.css'
import DadosPessoais from './components/DadosPessoais'
import Endereco from './components/Endereco'
import Agradecimento from './components/Agradecimento'
import { Botao, Cabecalho, FormularioContainer } from './estilos';
import usePassos from "./customHook/usePasso"
import { Passo } from "./components/Passos.style"

function App() {

  const componentes = [<DadosPessoais/>, <Endereco/>, <Agradecimento/>]

  //Vai receber os dados vindos do customHook usePasso
  const {indexAtual, componenteAtual, mudarIndex, ultimoIndex} = usePassos(componentes)

  return (
    <div className="App">
      
     <Cabecalho>
     <h2>Cadastre-se gratuitamente!</h2>
     <p>Faça o seu cadastro para ter acesso a todos os recursos da nossa plataforma</p>
     </Cabecalho>

     <FormularioContainer>
        <form onSubmit={(evento) => mudarIndex(indexAtual + 1, evento)}>

          <Passo indexAtual={indexAtual}/>

          <div className='inputs-container'>
            {componenteAtual}
          </div>

          <div className='acoes'>

            {!indexAtual == 0 && <Botao type='button' onClick={(evento) => mudarIndex(indexAtual - 1, evento)}>
                <GrFormPrevious/><span>Voltar</span></Botao>
              } 

              {ultimoIndex ? (
                <Botao type="submit"><span>Enviar</span><FiSend/></Botao>
              ) : (
                <Botao type="submit"><span>Avançar</span><GrFormNextLink/></Botao>
              )}

          </div>

        </form>
     </FormularioContainer>

     
    </div>
  )
}

export default App
