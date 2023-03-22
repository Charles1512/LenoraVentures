import React from 'react';
import saibamais2png from '../../imagens/saibamais2.png';
import {NewStyled} from './styled';

export default function New (){
    return (
        <NewStyled><>
            <img src={saibamais2png} width={300} alt='botão de saiba mais' style={{position:"absolute", left:800, bottom:-3200 }}/>
            </>
        </NewStyled>
    )

}