import React from "react";
import { SetStyled } from './styled'
import cenariopng from '../../imagens/cenario.png' 

export default function Set() {
    return (
        <SetStyled>
            <img src={cenariopng} width={1920} style={{position:"absolute", bottom:-4350}}/>
            <p style={{position: 'absolute',
            left: 90,
            bottom: -3600,
            width: '46%',
            fontSize: 85,
            fontWeight: 'bold',
            color: 'white',
            fontStyle:'italic'}}>CENÁRIO</p>
            <p style={{position: 'absolute',
            left: 90,
            bottom: -3770,
            width: '35%',
            fontSize: 30,
            color: 'white',
            }}>O lixo é questão de saúde pública.
            O Brasil gera cerca de 79 milhões de toneladas de resíduos sólidos por ano e 92% desses 
            resíduos são coletados. Porém, 40% do que é 
            coletado vai para aterros e lixões.</p>
            <p style={{position: 'absolute',
            left: 90,
            bottom: -3980,
            width: '35%',
            fontSize: 30,
            color: 'white',
            }}>A logística atual de coleta é muito cara tanto 
            para o consumidor quanto para o setor público. Os espaços físicos dos aterros são caros e se 
            desgastam com o tempo.</p>

        </SetStyled>

    )
}