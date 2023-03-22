import React from "react";
import {WorksStyled } from './styled'
import Baixeagorapng from '../../imagens/baixeagora.png' 
import comofuncionapng from '../../imagens/comofunciona.png' 


export default function Works() {
    return (
        <WorksStyled>
            <img src={comofuncionapng} width={1930} alt='mão com o celular' style={{position:"absolute", bottom:-5850}}/>
            <img src={Baixeagorapng} width={270} alt='botão de baixar agora'style={{position:"absolute", bottom:-5350, left:950}}/>
            <p style={{position: 'absolute',
            left: 980,
            bottom: -5100,
            width: '46%',
            fontSize: 115,
            fontWeight: 'bold',
            color: 'Grey',
            fontStyle:'italic'}}>COMO</p>
            <p style={{position: 'absolute',
            left: 980,
            bottom: -5105,
            width: '46%',
            fontSize: 65,
            color: 'Grey',
            fontStyle:'italic'}}>FUNCIONA?</p>
            <p style={{position: 'absolute',
            left: 980,
            bottom: -5250,
            width: '35%',
            fontSize: 30,
            color: 'Grey',
            fontStyle:'italic'
            }}>Os consumidores (pessoas físicas) 
            baixam o aplicativo gratuitamente, 
            inscrevem-se e tornam-se participante da rede social de sustentabilidade, o Catalog.</p>
            

        </WorksStyled>

    )
}