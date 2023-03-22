import React from 'react';
import logopng from '../../imagens/logo.png';
import {HeaderStyled} from './styled';

export default function Header (){
    return (
        <HeaderStyled>
            <img src={logopng} width={300} alt='logo da empresa'/>
            <nav>
                <a href='#a' > Home</a>
                <a href='#b'>Quem somos</a>
                <a href='#c'>Oportunidades</a>
                <a href='#d'>Cenário</a>
                <a href='#e'>Como funciona?</a>
                <a href='#f'>Contato</a>
            </nav>
        </HeaderStyled>
    )

}