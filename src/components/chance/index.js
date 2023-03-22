import React from "react";
import { ChanceStyled } from './styled'
import oportunidadespng from '../../imagens/oportunidades.png' 

export default function Chance() {
    return (
        <ChanceStyled>
            <img src={oportunidadespng} width={1920} alt='apresentação das oportunidades'/>
            <p style={{position: 'absolute',
            left: 300,
            bottom: -2150,
            fontSize: 150,
            fontWeight:'bold',
            color: 'green',
            fontStyle:'italic'}}>OPOR</p>
            <p style={{position: 'absolute',
            left: 300,
            bottom: -2270,
            fontSize: 150,
            fontWeight:'bold',
            color: 'green',
            fontStyle:'italic'}}>TUNI</p>
            <p style={{position: 'absolute',
            left: 300,
            bottom: -2390,
            fontSize: 150,
            fontWeight:'bold',
            color: 'green',
            fontStyle:'italic'}}>DADE</p>
            <p style={{position: 'absolute',
            left: 900,
            bottom: -1960,
            fontSize:25,
            width:'35%',
            color: 'grey',
            }}>• O produto atende a uma demanda de pessoas e empresas sujeitas às penalidades da legislação;</p>
            <p style={{position: 'absolute',
            left: 900,
            bottom: -2035,
            fontSize:25,
            width:'35%',
            color: 'grey',
            }}>• É escalonável (todos geram resíduos todos os dias por toda  a vida em qualquer lugar do planeta);
           </p>
           <p style={{position: 'absolute',
            left: 900,
            bottom: -2080,
            fontSize:25,
            width:'35%',
            color: 'grey',
            }}>
            • Busca solucionar problemas ambientais e sociais; </p>
            <p style={{position: 'absolute',
            left: 900,
            bottom: -2150,
            fontSize:25,
            width:'35%',
            color: 'grey',
            }}>• Tecnologia portátil e replicável (sem necessidade de personalização);</p>
            <p style={{position: 'absolute',
            left: 900,
            bottom: -2190,
            fontSize:25,
            width:'35%',
            color: 'grey',
            }}>• Geração de emprego e renda de forma digna e constante.</p>

        </ChanceStyled>

    )
}