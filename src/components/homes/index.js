import React from "react";
import { HomesStyled } from './styled'
import quemsomospng from '../../imagens/quemsomos.png' 

export default function Homes() {
    return (
        <HomesStyled>
            <img src={quemsomospng} width={2000} alt='duas pessoas segurando uma caixa de recicláveis'/>
            <p style={{position: 'absolute',
            left: 1080,
            bottom: -1070,
            width: '46%',
            fontSize: 65,
            fontWeight: 'bold',
            color: 'white'}}>Quem Somos</p>
            <p style={{position: 'absolute',
            left: 1080,
            bottom: -1380,
            width: '30%',
            fontSize: 35,
            fontWeight: 'bold',
            color: 'white',
            fontStyle:'italic'}}>Tecnologia que integra toda a 
            cadeia de resíduos sólidos de 
            embalagens pós-consumo, 
            permitindo identificar o local 
            onde os resíduos são gerados e 
            rastreá-los até o destino final, 
            integrando os atores da cadeia.</p>

        </HomesStyled>

    )
}