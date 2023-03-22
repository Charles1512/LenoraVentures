import styled from 'styled-components';

export const HeaderStyled = styled.header`
    margin: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    nav{
        margin-right: 250px;
        a{
            margin:16px;
            color: grey;
            font-size: 22px;
            font-weight: bold;
            text-decoration: none;
            transition: 0.3s;
            background-color: transparent;
            padding: 40px 20px 40px 20px;
            
            &:hover{
                transition: 0.7 ease;
                background-color: #7CFC00;
                color: white;
                border-radius: 0 0 0 30px ;


            }

            }
        }

        @media (max-width: 768px) {
            flex-direction: column;
  }
    
`
