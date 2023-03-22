import React from "react";
import { SectionStyled } from './styled'
import homepng from '../../imagens/home.png';
import saibamaispng from '../../imagens/saibamais.png' 

export default function Home() {
    return (
        <SectionStyled>
            <p style={{position: 'absolute',
            left: 100,
            bottom: 300,
            width: '46%',
            fontSize: 65,
            fontWeight: 'bold',
            color: 'grey'}}>É NECESSÁRIO ACELERAR
                A IMPLATAÇÃO DA
                ECONOMIA CIRCULAR</p>
            <p style={{position: 'absolute',
            left: 90,
            bottom: -10,
            width: '40%',
            fontSize: 40,
            color: 'grey', 
            fontStyle:'italic'}}>Implementar a economia circular 
            como um novo modelo econômico</p>
            <img src={homepng} width={'99%'} height={'20%'} alt='lata de recicláveis'/>
            <img src={saibamaispng} width={'15%'} alt='botão pra ver mais informações' style={{position:"absolute", left:90, bottom:-100, }}/>

        </SectionStyled>

    )
}