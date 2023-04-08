

//importando ícones
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BsHouseAdd} from 'react-icons/bs'
import {BiHappyHeartEyes} from 'react-icons/bi'

import { Passo, PassosContainer } from './Passos.style'

/*Recebe o passo atual (index do array de componentes)*/
function Passos({passoAtual}){


    return (
        /*PassoContainer é um styled.div`` dentro de Passos.style.js*/
        <PassosContainer>
 
            {/*Passo é um styled.span`` dentro de Passos.style.js*/}
            {/*Se o passo(index) for igual a 0 (página dados pessoais) recebe o css de ativo*/}
            <Passo ativo={passoAtual == 0 ? true : false}>
                <AiOutlineUserAdd /> Dados Pessoais {/*ícone user e texto*/}
            </Passo>

            {/*Se o passo(index) for igual a 1 (página endereço) recebe o css de ativo*/}
            <Passo ativo={passoAtual == 1 ? true : false}>
                <BsHouseAdd /> Endereço {/*ícone casa e texto*/}
            </Passo>

             {/*Se o passo(index) for igual a 2 (página agradecimento) recebe o css de ativo*/}
            <Passo ativo={passoAtual == 2 ? true : false}>
                <BiHappyHeartEyes /> Agradecimento {/*ícone carinha e texto*/}
            </Passo>
        </PassosContainer>
    )
}