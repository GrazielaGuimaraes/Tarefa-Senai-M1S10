import styled from "styled-components";

export const PassosContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
`;

//O css para o componente ativo
export const Passo = styled.span`
color: ${props => `${props.ativo ? '#c71d81' : '#868584'}`};
font-weight: ${props => `${props.ativo ? 'bold' : 'regular'}`};
`;