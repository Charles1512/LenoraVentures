import React, { useState } from "react";
import { FooterStyled } from './styled'
import contatopng from '../../imagens/contato.png'
import socialpng from '../../imagens/social.png'
import ReactModel from 'react-modal'
import logopng from '../../imagens/logo.png'



export default function Fotter() {
    const [open, setopen] = useState(false)
    return (
        <FooterStyled>
            <img src={contatopng} width={1900} alt='contato da empresa' style={{ position: "absolute", bottom: -6300 }} />
            <img src={socialpng} width={200} alt='redes sociais' style={{ position: "absolute", bottom: -6230, left: 550 }} />
            <p style={{
                position: 'absolute',
                left: 310,
                bottom: -6290,
                width: '46%',
                fontSize: 130,
                fontWeight: 'bold',
                color: 'White',
                fontStyle: 'italic'
            }}>CONTATO</p>
            <p style={{
                position: 'absolute',
                left: 910,
                bottom: -6250,
                width: '46%',
                fontSize: 110,
                fontWeight: 'bold',
                color: 'White',
                fontStyle: 'italic'
            }}>|</p>
            <p style={{
                position: 'absolute',
                left: 980,
                bottom: -6200,
                width: '25%',
                fontSize: 50,
                fontWeight: 'bold',
                color: 'White',
                fontStyle: 'italic'
            }}>alexandre.meza@biotera.com.br +55 11 94330.8051 </p>

            <button type='button' onClick={() => setopen(!open)} style={{
                position: 'absolute',
                left: 1110,
                bottom: -6230,
                padding: 15,
                width: 250,
                borderRadius: 22,
                color: 'grey',
                border: 'none',
                fontWeight: 'bold',
                fontSize: 20,
                fontStyle: 'italic'
            }}>Enviar Mensagem</button>

            <ReactModel isOpen={open} style={{ content: { margin: '200px 500px 50px 500px', height: 500, borderRadius: 12 } }}>
                <img src={logopng} width={200} alt='contato da empresa' style={{ position: "absolute" }} />
                <form style={{ display: 'flex', flexDirection: 'column', margin: '100px 0px 100px 0px' }}>
                    <label style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: 'grey'
                    }}>Nome:</label>
                    <input style={{ borderRadius: 4, width: 200, height: 30, borderColor: 'green' }} />
                    <label style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: 'grey'
                    }}>E-mail:</label>
                    <input style={{ borderRadius: 4, width: 200, height: 30, borderColor: 'green' }} />
                    <label style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: 'grey'
                    }}>Telefone:</label>
                    <input style={{ borderRadius: 4, width: 200, height: 30, borderColor: 'green' }} />
                    <label style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: 'grey',
                        marginLeft: 400,
                        marginTop: -180
                    }}>Mensagem:</label>
                    <input style={{ borderRadius: 4, width: 300, height: 250, borderColor: 'green', marginLeft: 400, marginTop: 10 }} />
                    <button type='button' onClick={() => setopen(!open)} style={{
                        position: 'absolute',
                        left: 20,
                        bottom: 150,
                        padding: 15,
                        width: 250,
                        borderRadius: 22,
                        color: 'white',
                        borderColor: 'green',
                        fontWeight: 'bold',
                        backgroundColor:'#228B22',
                        fontSize: 20,
                        fontStyle: 'italic'
                    }}>Enviar Mensagem</button>
                    <button type='button' onClick={() => setopen(!open)} style={{
                        position: 'absolute',
                        left: 770,
                        bottom: 480,
                        padding: 10,
                        width: 35,
                        borderRadius: 22,
                        color: 'red',
                        border: 'none',
                        borderColor: 'red',
                        fontWeight: 'bold',
                        fontSize: 20,
                        fontStyle: 'italic'
                    }}>X</button>
                </form>

            </ReactModel>


        </FooterStyled>

    )
}